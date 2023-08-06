'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      prodName: {
        type: Sequelize.STRING,
      },
      prodPrice: {
        type: Sequelize.FLOAT,
      },
      prodImg: {
        type: Sequelize.STRING,
      },
      prodCategory: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });

    // products' constraint
    await queryInterface.addConstraint('products', {
      type: 'foreign key',
      name: 'fk_products_categories',
      fields: ['prodCategory'],
      references: {
        table: 'categories',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('products');
    await queryInterface.removeConstraint('products', 'fk_products_categories');
  },
};
