"use strict";
const dataTypes = require("sequelize/lib/dialects/postgres/data-types");
var DataTypes = require("../../node_modules/sequelize/lib/data-types");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tour_destination extends Model {
    static associate(models) {}
  }
  Tour_destination.init(
    {
      id_tour: DataTypes.INTEGER,
      id_destination: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tour_destination",
    }
  );
  return Tour_destination;
};
