const District = require("../models/districtModel");

exports.addDistrict = async (req, res) => {
  const data = new District({
    district: req.query.district,
    city_id: req.query.city_id,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json({ city: dataToSave });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getDistrictsOfCity = async (req, res) => {
  const { id } = req.params;
  try {
    const dataToSave = await District.find()
      .where("city_id")
      .equals(id)
      .select("city_id district id -_id");
    //check if district_id works tomorrow
    res.status(200).json({ district: dataToSave });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
