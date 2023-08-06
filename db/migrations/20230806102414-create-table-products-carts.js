'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products_carts', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      prodId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      cartId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
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

    // products_carts' constraint
    await queryInterface.addConstraint('products_carts', {
      type: 'foreign key',
      name: 'fk_products_carts_carts',
      fields: ['cartId'],
      references: {
        table: 'carts',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    });

    await queryInterface.addConstraint('products_carts', {
      type: 'foreign key',
      name: 'fk_products_carts_products',
      fields: ['prodId'],
      references: {
        table: 'products',
        field: 'id',
      },
      onDelete: 'no action',
      onUpdate: 'no action',
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('products_carts');
    await queryInterface.removeConstraint(
      'products_carts',
      'fk_products_carts_carts',
    );
    await queryInterface.removeConstraint(
      'products_carts',
      'fk_products_carts_products',
    );
  },
};
