import express from "express";
import { db } from "../db/my_mongodb.js";

const router = express.Router();

// data in users.json

// Define routes for the connections page
router.get("html/connections", async (req, res) => {
  const users = await db.collection("users").find({}).toArray();
  res.json({ users });
});

export default router;
