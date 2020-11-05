'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    cost: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  Item.associate = function(models) {
    Item.belongsTo(models.Starter, { foreignKey: 'itemOneId' })
    Item.belongsTo(models.Starter, { foreignKey: 'itemTwoId' })
  };
  return Item;
};