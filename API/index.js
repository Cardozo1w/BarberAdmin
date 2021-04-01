const express = require("express");
const apiRouter = require('./routes/api');

const app = express();

require('./conexion');

express.json();
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(3100, () => {
  console.log("Servidor corriendo");
});
