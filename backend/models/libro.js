const mongoose = require("mongoose");
const { Schema } = mongoose;

const libroSchema = new Schema(
  {
    nombre: { type: String, required: true },
    autor: { type: String, required: true },
    editorial: { type: String, required: true },
    descripcion: { type: String, required: true },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Libro", libroSchema);