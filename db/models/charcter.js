'use strict';
module.exports = (sequelize, DataTypes) => {
  const Charcter = sequelize.define('Charcter', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    story: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    armorClass: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hitPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stength: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    constitution: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    wisdom: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    charisma: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    abilityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    classId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    creatorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Charcter.associate = function(models) {
    Charcter.hasOne(models.Ability, { foreignKey: 'abilityId' })
    Charcter.hasOne(models.Class, { foreignKey: 'classId' })
    Charcter.hasOne(models.User, { foreignKey: 'creatorId' })
  };
  return Charcter;
};