import express from "express";
import { db } from "../db/my_mongodb.js";

const router = express.Router();

// get all users
router.get("/", async (req, res) => {
  const db = req.app.locals.db;
  const users = await db.collection("users").find().toArray();
  res.json(users);
});

// get single user based on username in url
router.get("/:username", async (req, res) => {
  const db = req.app.locals.db;
  console.log("Fetching user with username:", req.params.username);
  const user = await db
    .collection("users")
    .findOne({ username: req.params.username });

  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// post new user
router.post("/", async (req, res) => {
  const db = req.app.locals.db;
  const { name, username, email, industry_tags, location, bio } = req.body;

  //console.log("params:", req.params);
  //console.log("body:", req.body);

  const result = await db.collection("users").insertOne({
    name,
    username,
    email,
    industry_tags,
    location,
    bio,
  });

  res.status(201).json(result);
});

// put update user
router.put("/:username", async (req, res) => {
  const db = req.app.locals.db;

  const { name, username, email, industry_tags, location, bio } = req.body;

  //console.log("Updating user with username:", req.params.username);
  const result = await db
    .collection("users")
    .updateOne(
      { username: req.params.username },
      { $set: { name, email, industry_tags, location, bio } },
    );

  res.json(result);
});

// delete user
router.delete("/:username", async (req, res) => {
  const db = req.app.locals.db;
  await db.collection("users").deleteOne({ username: req.params.username });
  res.json({ success: true });
});

export default router;
