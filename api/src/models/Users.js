const { DataTypes } = require("sequelize");

//usuario tipo persona natural
module.exports = (sequelize) => {
  sequelize.define("Users", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    documentType: { type: DataTypes.STRING },
    documentNumber: { type: DataTypes.INTEGER },
    name: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
    phone: { type: DataTypes.INTEGER },
    email: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    isActivo: { type: DataTypes.BOOLEAN, defaultValue: false }, //en caso d ser persona juridica se activa a true
  });
};
