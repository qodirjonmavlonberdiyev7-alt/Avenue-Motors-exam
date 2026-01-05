const { Schema, model } = require("mongoose");

const Automobile = new Schema({
  automobile_name: {
    type: String,
    required: true,
    trim: true,
    minLength: [5, "Avtomobil nomi kamida 5 ta harfdan iborat bo'lsin"],
  },
  brend: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 3,
  },
  horse_power: {
    type: Number,
    required: true,
    min: 1
 
  },
  year: {
    type: Number,
    required: true,
    min: 1886,
    max: new Date().getFullYear()
  },
  transmission: {
    type: String,
    required: true,
    enum: {
      values: ["mexanik", "avtomat"],
      message: "Transmission faqat mexanik yoki avtomat bo'lishi kerak"
    },
  },
  motor: {
     type: Number,
     required: true
  },
  seats: {
    type: Number,
    required: true,
    min: 2,
    max: 9
  },
  price: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
    min: 0
  },
  color: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  fuel_type: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    enum : {
      values: ["benzin", "gaz", "dizel", "elektr", "gibrid"]
    }
  },
  tanirovka: {
    type: String,
    trim: true,
    enum: {
      values: ["ha", "yo'q"]
    },
    default: "yo'q"
  }
},{
  timestamps: true
});


const AutomobileSchema = model("Automobile",Automobile)

module.exports = AutomobileSchema