require("dotenv").config();
const { emailValidation, passwordValidation } = require("./validation");
const bcrypt = require("bcryptjs");

const { createClient } = require("@supabase/supabase-js");
const url = process.env.SUPA_BASE_URL;
const key = process.env.SUPA_BASE_KEY;
const supabase = createClient(url, key);

const createUser = async (req, res) => {
  const { username, email, password, accountBalance } = req.body;
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
    return res.status(400).json(errors);
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

  res.json(data);
};

const login = async (req, res) => {
  const { email, password } = req.body;
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
    return res.status(400).json(errors);
  }

  const isMatch = await bcrypt.compare(password, data[0].password);
  if (!isMatch) {
    errors.password = "Password is incorrect";
    return res.status(400).json(errors);
  }

  res.json(data);
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
      error: "User was not found",
    });
  }

  res.json(data);
};

const updateAccountBalance = async (req, res) => {
  const { id } = req.params;
  const { accountBalance } = req.body;
  const { data, error } = await supabase
    .from("users")
    .update({ accountBalance })
    .match({ userId: id })
    .select();
  if (error) {
    alert(error.message);
    return; // abort
  }

  if (data.length === 0) {
    return res.status(404).json({
      error: "User was not found",
    });
  }

  res.json("Account balance is now updated!");
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("users")
    .delete()
    .match({ userId: id })
    .select();
  if (error) {
    alert(error.message);
    return; // abort
  }

  if (data.length === 0) {
    return res.status(404).json({
      error: "User was not found",
    });
  }

  res.json("User was successfully deleted!");
};

module.exports = {
  createUser,
  login,
  getUsers,
  getUser,
  updateAccountBalance,
  deleteUser,
};
