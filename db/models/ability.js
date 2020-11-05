'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ability = sequelize.define('Ability', {
    name: {
      type: DataTypes.STRING(50),
    },
    description: {
      type: DataTypes.STRING(1000),
    },
    uses: {
      type: DataTypes.INTEGER,
    },
  }, {});
  Ability.associate = function(models) {
    Ability.belongsTo(models.Enemy, { foreignKey: 'ability1'})
    Ability.belongsTo(models.Enemy, { foreignKey: 'ability2'})
  };
  return Ability;
};