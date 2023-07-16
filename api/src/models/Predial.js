const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Predial", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING }, //nombre del predio
    number: { type: DataTypes.STRING },
    value: { type: DataTypes.INTEGER },
    department: { type: DataTypes.STRING },
    municipality: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    property: { type: DataTypes.STRING }, //se asocia con la tabla se Users
    ground: { type: DataTypes.INTEGER }, //  se asocia a la tabla Ground
    isActive: { type: DataTypes.BOOLEAN, defaultValue: false },
  });
};
