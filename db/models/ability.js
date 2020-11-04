'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ability = sequelize.define('Ability', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    uses: DataTypes.INTEGER
  }, {});
  Ability.associate = function(models) {
    // associations can be defined here
  };
  return Ability;
};