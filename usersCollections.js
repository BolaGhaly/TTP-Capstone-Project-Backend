require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const url = process.env.SUPA_BASE_URL;
const key = process.env.SUPA_BASE_KEY;
const supabase = createClient(url, key);

const addPlayerToUserCollection = async (req, res) => {
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
};

const getAllUsersCollections = async (req, res) => {
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
};

const getUserCollectionByUserId = async (req, res) => {
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
};

const deleteUserCollectionByUserId = async (req, res) => {
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
};

module.exports = {
  addPlayerToUserCollection,
  getAllUsersCollections,
  getUserCollectionByUserId,
  deleteUserCollectionByUserId
};
