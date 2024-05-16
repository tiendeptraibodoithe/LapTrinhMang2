"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Destinations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { type: Sequelize.STRING },
      address_destination: { type: Sequelize.STRING },
      rate: { type: Sequelize.FLOAT },
      number_passengers: { type: Sequelize.INTEGER },
      image_1: { type: Sequelize.STRING },
      image_2: { type: Sequelize.STRING },
      image_3: { type: Sequelize.STRING },
      information_destination_1: { type: Sequelize.STRING },
      information_destination_2: { type: Sequelize.STRING },
      information_destination_3: { type: Sequelize.STRING },
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
    await queryInterface.dropTable("Destinations");
  },
};
