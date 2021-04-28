const express = require("express");
const apiRouter = require('./routes/api');
const cors = require('cors');

const app = express();

//habilitar cors
app.use(cors());

require('./conexion');

express.json();
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(2300, () => {
  console.log("Servidor corriendo");
});
