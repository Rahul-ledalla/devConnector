const express = require("express");
const connectDB = require("./config/db.js");
const { check, validationResult } = require("express-validator");

const app = express();
connectDB(); //connecting database

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Running");
});

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/users.js"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
