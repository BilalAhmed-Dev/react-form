const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

const connection = mongoose.createConnection(process.env.DATABASE_URL);
autoIncrement.initialize(connection);

const AddressTypeSchema = new mongoose.Schema({
  type: {
    required: true,
    type: String,
  },
});

AddressTypeSchema.plugin(autoIncrement.plugin, {
  model: "AddressType",
  field: "id",
  startAt: 1,
});

const AddressType = mongoose.model("AddressType", AddressTypeSchema);

module.exports = AddressType;
