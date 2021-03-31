const { Sequelize } = require("sequelize");

const serviciosModelo = require("./models/servicios");

const sequelize = new Sequelize("adminbarber", "root", "root", {
  host: "localhost",
  port: "8889",
  dialect: "mysql",
});

const Servicios = serviciosModelo(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas Sincronizadas");
});

module.exports = {
  Servicios,
};
