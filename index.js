// server.js
const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 15, // 10 requisições
  message: "Muitas requisições, tente novamente depois. Kleber dos santos 2518499"
});

app.use(limiter);

app.get("/", (req, res) => {
  res.send("Olá Kleber");
});

app.listen(3005, () => {
  console.log("Servidor on");
});