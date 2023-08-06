'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          id: 'fd292e10-5805-49a7-b057-c13411e3bd85',
          prodCategory: '737276f6-398f-40b1-a088-0972108e42b0',
          prodName: 'Áo thun trắng',
          prodPrice: 4.7,
          prodImg:
            'https://img.freepik.com/free-psd/isolated-black-t-shirt-front_125540-1167.jpg?t=st=1691319110~exp=1691319710~hmac=aa91324700b7c2c2183d3598a8fb71f980d8b550455ca8a02dac54c1c58d3da3',
        },
        {
          id: 'bc690304-7bb6-4c18-9558-42be827e8da1',
          prodCategory: '737276f6-398f-40b1-a088-0972108e42b0',
          prodName: 'Áo thun đen',
          prodPrice: 5.0,
          prodImg:
            'https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg?t=st=1691319110~exp=1691319710~hmac=0617adce38015b55aa0fbd07e95a3e0991cfc124966e8b3387a35b697c9bb472',
        },
        {
          id: 'cfde16a1-8d86-4fef-9da3-25a865cb4bcf',
          prodCategory: 'abf9a381-407e-4497-8044-0596ff1484ef',
          prodName: 'Giày trắng',
          prodPrice: 9.0,
          prodImg:
            'https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-135053.jpg?t=st=1691319344~exp=1691319944~hmac=d8809d32e172c71c9898f9232938704a32fd76e929c72a6f7dc696932d0fa00d',
        },
        {
          id: 'd92cb7bf-bc89-4eba-9479-19297e2db83c',
          prodCategory: 'abf9a381-407e-4497-8044-0596ff1484ef',
          prodName: 'Giày xanh dương',
          prodPrice: 10.0,
          prodImg:
            'https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?t=st=1691319344~exp=1691319944~hmac=3c18cfdac492283731cbabddeaa1be3f5cfcbe0acd17afff6616087a54807f1c',
        },
        {
          id: '323afe7d-a134-40fc-90c2-de32204374c2',
          prodCategory: '2c7dd1a8-5f68-49f2-a1fa-1e55850256eb',
          prodName: 'Đồng hồ bạc',
          prodPrice: 150.0,
          prodImg:
            'https://img.freepik.com/premium-vector/watch-gold-silver-diamonds-design-white_33869-131.jpg',
        },
        {
          id: '9a2a1721-8f0e-41d0-b624-25b04b7a059b',
          prodCategory: '2c7dd1a8-5f68-49f2-a1fa-1e55850256eb',
          prodName: 'Đồng hồ vàng',
          prodPrice: 100.0,
          prodImg:
            'https://img.freepik.com/free-photo/elegant-watch-with-silver-golden-chain-isolated_181624-27080.jpg?t=st=1691319651~exp=1691320251~hmac=f6cbb142214b56980cc9c65a35c875728ea90a6f51e4e549e101158adbf0b6e9',
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('products', {
      id: {
        [Op.in]: [
          'fd292e10-5805-49a7-b057-c13411e3bd85',
          'bc690304-7bb6-4c18-9558-42be827e8da1',
          'cfde16a1-8d86-4fef-9da3-25a865cb4bcf',
          'd92cb7bf-bc89-4eba-9479-19297e2db83c',
          '323afe7d-a134-40fc-90c2-de32204374c2',
          '9a2a1721-8f0e-41d0-b624-25b04b7a059b',
        ],
      },
    });
  },
};
