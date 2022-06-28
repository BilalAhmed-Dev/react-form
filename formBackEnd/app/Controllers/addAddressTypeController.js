const AddressType = require("../models/address_typeModel");

exports.addAddressType = async (req, res) => {
  const data = new AddressType({
    type: req.query.type,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json({ address_type: dataToSave });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
