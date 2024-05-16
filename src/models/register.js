"use strict";
const dataTypes = require("sequelize/lib/dialects/postgres/data-types");
var DataTypes = require("../../node_modules/sequelize/lib/data-types");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Register extends Model {
    static associate(models) {}
  }
  Register.init(
    {
      Registername: DataTypes.STRING,
      id_tour: DataTypes.INTEGER,
      departure_time: DataTypes.STRING,
      number_passengers: DataTypes.INTEGER,
      email: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      day_register: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Register",
    }
  );
  return Register;
};
