const mongoose = require("mongoose");
const { Schema } = mongoose;

const editorialSchema = new Schema(
  {
    nombre: { type: String, required: true },
    fechaFundacion: { type: String, required: true },
    sedeCentral: { type: String, required: true },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Editorial", editorialSchema);