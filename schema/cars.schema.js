const { Schema, model } = require("mongoose");

const Automobile = new Schema({
  automobile_name: {
    type: String,
    required: true,
    trim: true,
    minLength: [5, "Avtomobil nomi kamida 5 ta harfdan iborat bo'lsin"],
  },
  brend_name: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
  },
  horse_power: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
    enum: {
      values: ["mexanik", "avtomat"],
    },
  },
  seats: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  fuel_type: {
    type: String,
    required: true,
  },
});


const AutomobileSchema = model("Automobile",Automobile)

module.exports = AutomobileSchema