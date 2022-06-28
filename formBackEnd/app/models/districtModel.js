const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const DistrictSchema = new mongoose.Schema({
  district: {
    required: true,
    type: String,
  },

  city_id: {
    required: true,
    type: Number,
  },
});

DistrictSchema.plugin(autoIncrement.plugin, {
  model: "District",
  field: "id",
  startAt: 1,
});

const District = mongoose.model("District", DistrictSchema);

module.exports = District;
