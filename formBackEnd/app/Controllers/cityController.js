const City = require("../models/cityModel");

exports.addCity = async (req, res) => {
  const data = new City({
    city: req.query.city,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json({ city: dataToSave });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
