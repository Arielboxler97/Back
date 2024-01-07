'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Places', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      coordinates: {
        type: Sequelize.STRING
      },
      barrioId: {
        type: Sequelize.INTEGER,
        references:{
          model : "Barrios",
          key: "id"
        }
      },
      email: {
        type: Sequelize.STRING
      },
      socialNetwork: {
        type: Sequelize.STRING
      },
      wp1: {
        type: Sequelize.STRING
      },
      wp2: {
        type: Sequelize.STRING
      },
      wp3: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      slogan: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references :{
          model : "Users",
          key : "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Places');
  }
};