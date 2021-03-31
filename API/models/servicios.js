module.exports = (sequelize, type) => {
  return sequelize.define("servicio", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: type.STRING,
    descripcion: type.STRING,
    duracion: type.INTEGER,
    costo: type.INTEGER,
  });
};
