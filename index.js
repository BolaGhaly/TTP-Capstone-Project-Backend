const express = require("express");
const app = express();
const cors = require("cors");
const compression = require("compression"); // import compression to reduce size of response
const port = process.env.PORT || 5200;
const login_db = require("./login_and_signup_db");
const { createClient } = require("@supabase/supabase-js");

const url = process.env.SUPA_BASE_URL;
const key = process.env.SUPA_BASE_KEY;
const supabase = createClient(url, key);

//middleware
app.use(compression());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ text: "Hello World" });
});

//--------------------------- Routes for players --------------------------
//Get all players' cards
app.get("/players_cards", async (req, res) => {
  const { data, error } = await supabase
    .from("players")
    .select()
    .order("playerId", { ascending: true });
  if (error) {
    alert(error.message);
    return; // abort
  }
  res.json(data);
});

//Get a player's card by their id
app.get("/players_cards/:id", async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from("players")
    .select()
    .eq("playerId", id);
  if (error) {
    alert(error.message);
    return; // abort
  }
  res.json(data);
});

//--------------------------- Routes for login and sign up --------------------------
app.post("/signup", login_db.createUser);
app.post("/login", login_db.login);
app.get("/users", login_db.getUsers);
app.get("/user/:id", login_db.getUser);
app.put("/user/:id", login_db.updateCurrency);
app.delete("/user/:id", login_db.deleteUser);

//--------------------------- Routes for user's collection --------------------------
//Insert the user's id (of the user that's logged in) and the player's id (of the card that they received from opening a pack/chest)
app.post("/users_collection", async (req, res) => {
  const { userId, playerId } = req.body;
  const isUserIdValid = await supabase
    .from("users")
    .select()
    .eq("userId", userId);
  if (isUserIdValid.data.length === 0) {
    return res.status(404).json({
      error: "User was not found",
    });
  }

  const isPlayerIdValid = await supabase
    .from("players")
    .select()
    .eq("playerId", playerId);
  if (isPlayerIdValid.data.length === 0) {
    return res.status(404).json({
      error: "Player was not found",
    });
  }

  const { data, error } = await supabase
    .from("users_collection")
    .insert({ userId, playerId })
    .select();
  if (error) {
    alert(error.message);
    return; // abort
  }
  res.json(data);
});

//Return everything that's in the "users_collection" table
app.get("/users_collection", async (req, res) => {
  const { data, error } = await supabase
    .from("users_collection")
    .select()
    .order("userId", { ascending: true })
    .order("playerId", { ascending: true });
  if (error) {
    alert(error.message);
    return; // abort
  }
  res.json(data);
});

//Take a user's id as a param
//Return an array of objects of a user's id and their players' id (players cards)
app.get("/users_collection/:id", async (req, res) => {
  const { id } = req.params;
  const isUserIdValid = await supabase.from("users").select().eq("userId", id);
  if (isUserIdValid.data.length === 0) {
    return res.status(404).json({
      error: "User was not found",
    });
  }
  const isUserCollectionEmpty = await supabase
    .from("users_collection")
    .select()
    .eq("userId", id);
  if (isUserCollectionEmpty.data.length === 0) {
    return res.status(404).json({
      error: "User's collection is empty!",
    });
  }
  
  const { data, error } = await supabase
    .from("users_collection")
    .select()
    .eq("userId", id)
    .order("playerId", { ascending: true });
  if (error) {
    alert(error.message);
    return; // abort
  }

  res.json(data);
});

//Take a user's id as a param
//Delete a user's collection
app.delete("/users_collection/:id", async (req, res) => {
  const { id } = req.params;
  const isUserIdValid = await supabase.from("users").select().eq("userId", id);
  if (isUserIdValid.data.length === 0) {
    return res.status(404).json({
      error: "User was not found",
    });
  }

  const isUserCollectionEmpty = await supabase
    .from("users_collection")
    .select()
    .eq("userId", id);
  if (isUserCollectionEmpty.data.length === 0) {
    return res.status(404).json({
      error: "User's collection is empty!",
    });
  }

  const { data, error } = await supabase
    .from("users_collection")
    .delete()
    .eq("userId", id);
  if (error) {
    alert(error.message);
    return; // abort
  }

  res.json("User's collection was successfully deleted!");
});

//Listen to port
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
