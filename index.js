const express = require("express");
const app = express();
const cors = require("cors");
const compression = require("compression");
const port = process.env.PORT || 5200;

const players = require("./players");
const users = require("./users");
const usersCollections = require("./usersCollections");

//middleware
app.use(compression());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ text: "Hello World" });
});

//--------------------------- Routes for players --------------------------
app.get("/players_cards", players.getAllPlayers);
app.get("/players_cards/:id", players.getPlayerById);

//--------------------------- Routes for login and sign up --------------------------
app.post("/signup", users.createUser);
app.post("/login", users.login);
app.get("/users", users.getUsers);
app.get("/user/:id", users.getUser);
app.put("/user/:id", users.updateAccountBalance);
app.delete("/user/:id", users.deleteUser);

//--------------------------- Routes for user's collection --------------------------
app.post("/users_collection", usersCollections.addPlayerToUserCollection);
app.get("/users_collection", usersCollections.getAllUsersCollections);
app.get("/users_collection/:id", usersCollections.getUserCollectionByUserId);
app.delete("/users_collection/:id", usersCollections.deleteUserCollectionByUserId);

//Listen to port
app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
