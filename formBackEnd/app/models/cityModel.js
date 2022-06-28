const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const CitySchema = new mongoose.Schema({
  city: {
    required: true,
    type: String,
  },
});

CitySchema.plugin(autoIncrement.plugin, {
  model: "City",
  field: "id",
  startAt: 1,
});
const City = mongoose.model("City", CitySchema);

module.exports = City;
