import express from "express";

const router = express.Router();

// data in users.json

// Define routes for the connections page
router.get("/connections", (req, res) => {
  res.json({ userConnections });
});

export default router;
