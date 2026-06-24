import express from "express";
import userRouter from "./routes/users.js";
import { db } from "./db/my_mongodb.js";

// EXPRESS SETUP
("Initializing backend server for Grant Finder application...");

const app = express();
const PORT = process.env.PORT || 3000;

/** app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});*/

app.use(express.json());
app.use(express.static("./frontend"));

app.locals.db = db;

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
