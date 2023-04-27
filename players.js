require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const url = process.env.SUPA_BASE_URL;
const key = process.env.SUPA_BASE_KEY;
const supabase = createClient(url, key);

const getAllPlayers = async (req, res) => {
  const { data, error } = await supabase
    .from("players")
    .select()
    .order("playerId", { ascending: true });
  if (error) {
    alert(error.message);
    return; // abort
  }
  res.json(data);
};

const getPlayerById = async (req, res) => {
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
};

module.exports = {
  getAllPlayers,
  getPlayerById
};
