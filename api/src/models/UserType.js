const { DataTypes } = require("sequelize");

//tipo de usuario si es persona juridica se activa esta seccion, se asocia con la tabla se Users
module.exports = (sequelize) => {
  sequelize.define("UserType", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nit: { type: DataTypes.INTEGER },
    buisnessName: { type: DataTypes.STRING },
    isActivo: { type: DataTypes.BOOLEAN, defaultValue: false },
  });
};
