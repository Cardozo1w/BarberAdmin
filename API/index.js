const express = require("express");

const app = express();

require('./conexion');

express.json();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.listen(3100, () => {
  console.log("Servidor corriendo");
});
