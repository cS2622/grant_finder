import express from "express";

//const router = express.Router();
const app = express();

// will be replaced by mongodb data
const profile = [
  {
    name: "Jane Doe",
    username: "janedoe",
    email: "janedoe@example.com",
    industryTags: [],
    location: "Boston, MA",
    bio: "Passionate about using technology to solve real-world problems. Experienced in software development and project management.",
  },
];

// Define routes for the profile page
//router.get("/profile", (req, res) => {
//res.json({ profile });
//});

app.get("/profile", (req, res) => {
  res.json({ profile });
});

export default app;

//export default router;
