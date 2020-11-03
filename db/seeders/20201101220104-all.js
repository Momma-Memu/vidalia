'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'memu',
          email: 'memu@email.com',
          password: bcrypt.hashSync('password'),
          dob: new Date('03-21-1995'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );

    const quests = await queryInterface.bulkInsert(
      'Quests',
      [
        {
          title: 'Warring Matriarchs',
          description: 'The islands of Vidalia are at war. The Matriarchs seem unwilling to let go of their grudges.',
          creatorId: users[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Quests', null, {});
    return queryInterface.bulkDelete('Users', null, {});
  }
};
