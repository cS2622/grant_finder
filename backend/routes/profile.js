import express from "express";
import { db } from "../db/my_mongodb.js";

//const router = express.Router();
const app = express();

// data in users.json

// Define routes for the profile page
//router.get("/profile", (req, res) => {
//res.json({ profile });
//});

app.get("html/profile", (req, res) => {
  //const users = await myMongoDB.getUser(username: ""); // not sure what this route should be getting
  res.json({ users });
});

export default app;

//export default router;
