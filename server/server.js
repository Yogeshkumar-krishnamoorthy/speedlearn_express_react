const express = require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Yogesh@7258",
  database: "speedlearn",
});

connection.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("MySQL connected successfully");
  }
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/check", (req, res) => {
  res.send({ check: "working" });
});

app.listen(3001, () => {
  console.log("Express server running on http://localhost:3001");
});
