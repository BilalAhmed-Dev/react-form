const mongoose = require("mongoose");
// birthday should be Date

const autoIncrement = require("mongoose-auto-increment");
//  address_id should reference
const PersonalSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  surname: {
    required: true,
    type: String,
  },
  birthday: {
    required: true,
    type: String,
  },
  birthplace: {
    required: true,
    type: String,
  },

  city_id: {
    required: true,
    type: Number,
  },

  district_id: {
    required: true,
    type: Number,
  },
  address_type: {
    required: true,
    type: Number,
  },

  phone_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Phone",
  },
});

PersonalSchema.plugin(autoIncrement.plugin, {
  model: "Personal",
  field: "personal_id",
  startAt: 1,
});

const Personal = mongoose.model("Personal", PersonalSchema);

module.exports = Personal;
