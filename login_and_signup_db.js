require("dotenv").config();
const { emailValidation, passwordValidation } = require("./validation");
const bcrypt = require("bcryptjs");
const { createClient } = require("@supabase/supabase-js");

const url = process.env.SUPA_BASE_URL;
const key = process.env.SUPA_BASE_KEY;
const supabase = createClient(url, key);

const createUser = async (request, response) => {
  const { username, email, password, accountBalance } = request.body;
  let errors = {};

  if (!emailValidation(email)) {
    errors.email = "Email is not valid";
  }
  if (!passwordValidation(password)) {
    errors.password = "Password is not valid";
  }

  const isUsernameInUse = await supabase
    .from("users")
    .select()
    .eq("username", username);
  if (isUsernameInUse.data.length > 0) {
    errors.username = "Username is already in use";
  }

  const isEmailInUse = await supabase.from("users").select().eq("email", email);
  if (isEmailInUse.data.length > 0) {
    errors.email = "Email is already in use";
  }

  if (Object.keys(errors).length > 0) {
    return response.status(400).json(errors);
  }

  const salt = await bcrypt.genSalt(10); //salt encryption
  const hashedPassword = await bcrypt.hash(password, salt); //hash encryption

  const { data, error } = await supabase
    .from("users")
    .insert({ username, email, password: hashedPassword, accountBalance })
    .select();

  if (error) {
    alert(error.message);
    return; // abort
  }

  response.json(data);
};

const login = async (request, response) => {
  const { email, password } = request.body;
  let errors = {};

  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("email", email);

  if (error) {
    alert(error.message);
    return; // abort
  }

  if (data.length === 0) {
    errors.email = "Email is not registered";
    return response.status(400).json(errors);
  }

  const isMatch = await bcrypt.compare(password, data[0].password);
  if (!isMatch) {
    errors.password = "Password is incorrect";
    return response.status(400).json(errors);
  }

  response.json(data);
};

const getUsers = async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .select()
    .order("userId", { ascending: true });
  if (error) {
    alert(error.message);
    return; // abort
  }
  res.json(data);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("userId", id);
  if (error) {
    alert(error.message);
    return; // abort
  }

  if (data.length === 0) {
    return res.status(404).json({
      error: "User not found",
    });
  }

  res.json(data);
};

const updateCurrency = async (req, res) => {
  try {
    const { id } = req.params;
    const { currency } = req.body;
    const changeCurrency = await pool.query(
      "UPDATE users SET currency = $1 WHERE id = $2", //update in users table set currency to $1
      [currency, id] //specify table
    );

    res.json("currency was updated!");
  } catch (err) {
    console.error(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await pool.query("DELETE FROM users WHERE id = $1", [
      id,
    ]);

    res.json("User was deleted!");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  login,
  updateCurrency,
  deleteUser,
};
