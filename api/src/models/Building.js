const { DataTypes } = require("sequelize");
//tabla de construcciones en la propeidad o terreno
module.exports = (sequelize) => {
  sequelize.define("Building", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    numberFlat: { type: DataTypes.INTEGER }, //numero de pisos
    area: { type: DataTypes.INTEGER },
    address: { type: DataTypes.STRING }, //direccion de la construccion
    typeBuilding: { type: DataTypes.STRING }, //tipo de construccion se asociara con la tabla BuildingType
    isActive: { type: DataTypes.BOOLEAN, defaultValue: false },
  });
};
