const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("BuildingType", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    industrial: { type: DataTypes.STRING },
    commercial: { type: DataTypes.STRING },
    residential: { type: DataTypes.STRING },
    isActivo: { type: DataTypes.BOOLEAN, defaultValue: false },
  });
};
