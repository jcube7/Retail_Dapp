const express = require("express");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname + "/products.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/about.html"));
});
app.get("/appointment", (req, res) => {
  res.sendFile(path.join(__dirname + "/appointment.html"));
});

app.get("/account_recharge", (req, res) => {
  res.sendFile(path.join(__dirname + "/recharge.html"));
});

app.get("/account", (req, res) => {
  res.sendFile(path.join(__dirname + "/account.html"));
});

app.get("/user", (req, res) => {
  res.sendFile(path.join(__dirname + "/user.html"));
});

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname + "/404.html"));
});

const server = app.listen(process.env.PORT || 8000);
const portNumber = server.address().port;
console.log(`port: ${portNumber}`);
