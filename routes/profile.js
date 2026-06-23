import express from "express";

//const router = express.Router();
const app = express();

// data in users.json

// Define routes for the profile page
//router.get("/profile", (req, res) => {
//res.json({ profile });
//});

app.get("/profile", (req, res) => {
  res.json({ profile });
});

export default app;

//export default router;
