import express from "express";
import userRouter from "./routes/users.js";
import { connectClient } from "./db/my_mongodb.js";

// EXPRESS SETUP
console.log("Initializing backend server for Grant Finder application...");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("./frontend"));

const db = await connectClient();
app.locals.db = db;

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
