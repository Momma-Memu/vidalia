'use strict';
module.exports = (sequelize, DataTypes) => {
  const Race = sequelize.define('Race', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    acMod: DataTypes.INTEGER,
    hpMod: DataTypes.INTEGER,
    strMod: DataTypes.INTEGER,
    dexMod: DataTypes.INTEGER,
    constMod: DataTypes.INTEGER,
    intelMod: DataTypes.INTEGER,
    wisdMod: DataTypes.INTEGER,
    charMod: DataTypes.INTEGER
  }, {});
  Race.associate = function(models) {
    // associations can be defined here
  };
  return Race;
};