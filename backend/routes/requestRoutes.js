const express = require("express");

//to create a new router object  with Route func.
const routes = express.Router();

//GET All
routes.get("/", (req, res) => {
  res.json({ mssg: "Get all" });
});
//GET SINGLE
routes.get("/:id", (req, res) => {
  res.json({ mssg: "Get single by ID" });
});

//POST SINGLE
routes.post("/:id", (req, res) => {
  res.json({ mssg: "Create one" });
});

//DELETE SINGLE
routes.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete one" });
});

//UPDATE SINGLE
routes.patch("/:id", (req, res) => {
  res.json({ mssg: "Update one" });
});

module.exports = routes;
