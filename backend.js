import express from "express";
import profileRouter from "./routes/profile.js";
import connectionsRouter from "./routes/connections.js";

// EXPRESS SETUP
console.log("Initializing backend server for Grant Finder application...");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("frontend"));

app.use("/api/profile", profileRouter);
app.use("/api/connections", connectionsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

