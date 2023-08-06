'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'products_carts',
      [
        {
          id: '24c3671d-8510-4055-a30d-3d1d7aafa1ae',
          prodId: 'fd292e10-5805-49a7-b057-c13411e3bd85',
          cartId: 'bccd4020-f63f-432c-8575-ea16e36e9420',
          quantity: 2
        },
        {
          id: '2ec78519-d722-4861-b93f-cb3b76027bbf',
          prodId: 'd92cb7bf-bc89-4eba-9479-19297e2db83c',
          cartId: 'bccd4020-f63f-432c-8575-ea16e36e9420',
          quantity: 3
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('products_carts', {
      id: {
        [Op.in]: [
          '24c3671d-8510-4055-a30d-3d1d7aafa1ae',
          '2ec78519-d722-4861-b93f-cb3b76027bbf',
        ],
      },
    });
  },
};
