const { DataTypes } = require("sequelize");
//tabla tipo de terreno y se asocia con la tabla de Building
module.exports = (sequelize) => {
  sequelize.define("GroundTypes", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    urban: { type: DataTypes.STRING },
    rural: { type: DataTypes.STRING },
    building: { type: DataTypes.STRING }, //verifica si tiene construcciones y se asocia con ellas en la tabla BuildingType
    isActive: { type: DataTypes.BOOLEAN, defaultValue: false },
  });
};
