'use strict';
module.exports = (sequelize, DataTypes) => {
  const Weapon = sequelize.define('Weapon', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    hitDice: DataTypes.STRING,
    damageType: DataTypes.STRING
  }, {});
  Weapon.associate = function(models) {
    // associations can be defined here
  };
  return Weapon;
};