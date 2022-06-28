const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const PhoneSchema = new mongoose.Schema({
  phone: [
    {
      required: true,
      type: String,
      unique: true,
    },
  ],
});

PhoneSchema.plugin(autoIncrement.plugin, {
  model: "Phone",
  field: "id",
  startAt: 1,
});
const Phone = mongoose.model("Phone", PhoneSchema);

module.exports = Phone;
