const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const categoryRoutes = require("./routes/categoryRoutes");
const letterRoutes = require("./routes/letterRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "LetterHub API is running"
  });
});

app.use(
  "/api/categories",
  categoryRoutes
);

app.use(
  "/api/letters",
  letterRoutes
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `LetterHub server running on http://localhost:${PORT}`
  );
});