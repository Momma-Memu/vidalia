'use strict';
module.exports = (sequelize, DataTypes) => {
  const Starter = sequelize.define('Starter', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    weaponId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    spellOneId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    spellTwoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    itemOneId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    itemTwoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Starter.associate = function(models) {
    Starter.belongsTo(models.Class, {foreignKey: 'starterId'})
    Starter.hasOne(models.Weapon, { foreignKey: 'weaponId' })
    Starter.hasOne(models.Spell, { foreignKey: 'spellOneId' })
    Starter.hasOne(models.Spell, { foreignKey: 'SpellTwoId' })
    Starter.hasOne(models.Item, { foreignKey: 'itemOneId' })
    Starter.hasOne(models.Item, { foreignKey: 'itemTwoId' })
  };
  return Starter;
};