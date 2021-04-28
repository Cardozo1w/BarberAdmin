module.exports = (sequelize, type) => {

return sequelize.define("entradas", {
id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},

tipoServicio: type.STRING,
costo: type.INTEGER,
idServicio: type.INTEGER

});

}


