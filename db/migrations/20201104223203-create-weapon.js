'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Weapons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      hitDice: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      damageType: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Weapons');
  }
};