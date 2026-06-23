import express from "express";

const router = express.Router();

// will be replaced by drawing from mongodb data
const userConnections = [
  {
    name: "Jane Doe",
    username: "janedoe", //not going to include password for security reasons
    email: "janedoe@example.com",
    industryTags: ["biotech", "software development"],
    location: "Boston, MA",
    bio: "Startup founder in the biotech space.",
  },
  {
    name: "Jane Moe",
    username: "janemoe", //not going to include password for security reasons
    email: "janemoe@example.com",
    industryTags: ["AI", "machine learning"],
    location: "LA, CA",
    bio: "New researcher in the field of artificial intelligence.",
  },
];

// Define routes for the connections page
router.get("/connections", (req, res) => {
  res.json({ userConnections });
});

export default router;
