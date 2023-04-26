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
  try {
    const { user_id, player_id } = req.body;
    const newUserCollection = await pool.query(
      "INSERT INTO users_collection (user_id, player_id) VALUES ($1, $2) RETURNING *",
      [user_id, player_id]
    );
    res.json(newUserCollection.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//Return everything that's in the "users_collection" table
app.get("/users_collection", async (req, res) => {
  try {
    const allUsersCollection = await pool.query(
      "SELECT * FROM users_collection"
    );
    res.json(allUsersCollection.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//Take a user's id as a param
//Return an array of objects of the user's id and their players' id (players cards)
app.get("/users_collection/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const usersCollection = await pool.query(
      "SELECT * FROM users_collection WHERE user_id= $1",
      [id]
    );

    let result = [];
    usersCollection.rows.map(async (e) => {
      console.log(e);
      let current_id = e.player_id;
      let currentPlayers = await pool.query(
        "SELECT * FROM players_info WHERE player_id = $1",
        [current_id]
      );
      result.push(currentPlayers.rows);
    });

    res.json(usersCollection.rows);
    res.json(result);
  } catch (error) {
    console.error(error.message);
  }
});

//Take a user's id as a param
//Delete a user's collection
app.delete("/users_collection/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const usersCollection = await pool.query(
      "DELETE FROM users_collection WHERE user_id = $1",
      [id]
    );
    res.json("User's collection was deleted!");
  } catch (error) {
    console.error(error.message);
  }
});

//Listen to port
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
