"use strict";
const dataTypes = require("sequelize/lib/dialects/postgres/data-types");
var DataTypes = require("../../node_modules/sequelize/lib/data-types");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    static associate(models) {}
  }
  Destination.init(
    {
      name: DataTypes.STRING,
      address_destination: DataTypes.STRING,
      rate: DataTypes.FLOAT,
      number_passengers: DataTypes.INTEGER,
      image_1: DataTypes.STRING,
      image_2: DataTypes.STRING,
      image_3: DataTypes.STRING,
      information_destination_1: DataTypes.STRING,
      information_destination_2: DataTypes.STRING,
      information_destination_3: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Destination",
    }
  );
  return Destination;
};
