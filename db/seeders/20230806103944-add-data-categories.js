'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          id: '737276f6-398f-40b1-a088-0972108e42b0',
          categoryName: 'Quần áo',
        },
        {
          id: 'abf9a381-407e-4497-8044-0596ff1484ef',
          categoryName: 'Giày',
        },
        {
          id: '2c7dd1a8-5f68-49f2-a1fa-1e55850256eb',
          categoryName: 'Đồng hồ',
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('categories', {
      id: {
        [Op.in]: [
          '737276f6-398f-40b1-a088-0972108e42b0',
          'abf9a381-407e-4497-8044-0596ff1484ef',
          '2c7dd1a8-5f68-49f2-a1fa-1e55850256eb',
        ],
      },
    });
  },
};
