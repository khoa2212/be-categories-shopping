'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'carts',
      [
        {
          id: 'bccd4020-f63f-432c-8575-ea16e36e9420',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('carts', {
      id: {
        [Op.in]: ['bccd4020-f63f-432c-8575-ea16e36e9420'],
      },
    });
  },
};
