const { DataTypes } = require("sequelize");
//datos del terreno
module.exports = (sequelize) => {
  sequelize.define("Ground", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    area: { type: DataTypes.INTEGER },
    valueMarket: { type: DataTypes.INTEGER }, //valor comercial
    adjacent: { type: DataTypes.INTEGER }, //cerca de fuente de agua colindante
    groundType: { type: DataTypes.STRING }, //equivale a los tipos de terreno en la tabla tipoTerreno y se asocia con la tabla GroundTypes
    isActive: { type: DataTypes.BOOLEAN, defaultValue: false },
  });
};
