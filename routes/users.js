/* const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const users = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "data", "users.json"))
);

// GET /users → lista completa
router.get("/", (req, res) => {
  res.json(users);
});

// GET /users/:id → buscar por ID
router.get("/:id", (req, res) => {
  const user = users.find((u) => u._id === req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "ID de usuario no encontrado" });
  }
});

module.exports = router;
 */
const router = require("express").Router();
const { getUsers, getUserById, createUser } = require("../controllers/users");

router.get("/", getUsers); // GET /users
router.get("/:userId", getUserById); // GET /users/:userId
router.post("/", createUser); // POST /users

module.exports = router;
