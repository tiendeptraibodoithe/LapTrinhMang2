"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Registers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: { type: Sequelize.STRING },
      id_tour: { type: Sequelize.INTEGER },
      departure_time: { type: Sequelize.STRING },
      number_passengers: { type: Sequelize.INTEGER },
      email: { type: Sequelize.STRING },
      phonenumber: { type: Sequelize.STRING },
      day_register: { type: Sequelize.STRING },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Registers");
  },
};
