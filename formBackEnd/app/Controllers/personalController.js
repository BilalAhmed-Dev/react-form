const Personal = require("../models/personalModel");
// const Address = require("../models/addressModel");
const Phone = require("../models/phoneModel");
const District = require("../models/districtModel");
const City = require("../models/cityModel");
const AddressType = require("../models/address_typeModel");

exports.addPersonal = async (req, res) => {
  const personalData = new Personal({
    name: req.query.name,
    surname: req.query.surname,
    birthday: req.query.birthday,
    birthplace: req.query.birthplace,
    city_id: req.query.city_id,
    district_id: req.query.district_id,
    address_type: req.query.address_type,
  });

  // const AddressData = new Address({
  //   city_id: req.query.city_id,
  //   district_id: req.query.district_id,
  //   address_type: req.query.address_type,
  // });

  const PhoneData = new Phone({
    phone: req.query.phone,
  });

  try {
    // const AddressDataToSave = await AddressData.save();
    // adding id of created address table to make one to many relationShip
    // personalData.address_id = AddressDataToSave._id;
    // PhoneData.address_id = AddressDataToSave._id;
    //

    const PhoneDataToSave = await PhoneData.save();
    personalData.phone_id = PhoneDataToSave._id;
    const personalDataToSave = await personalData.save();

    res.status(200).json({
      personal: personalDataToSave,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllPersonal = async (req, res) => {
  try {
    const Cities = await City.find();

    const Districts = await District.find();

    const addressTypes = await AddressType.find();

    const aggregatedData = await Personal.aggregate([
      {
        $lookup: {
          from: "cities",
          localField: "city_id",
          foreignField: "id",
          as: "city",
        },
      },

      {
        $lookup: {
          from: "phones",
          localField: "phone_id",
          foreignField: "_id",
          as: "phone",
        },
      },

      {
        $lookup: {
          from: "districts",
          localField: "district_id",
          foreignField: "id",
          as: "district",
        },
      },

      {
        $lookup: {
          from: "addresstypes",
          localField: "address_type",
          foreignField: "id",
          as: "address_type_Of_Personal",
        },
      },
    ]);
    // const gonnaSend = dataToSave[0].name;
    res.status(200).json({
      personals: aggregatedData,
      city: Cities,
      districts: Districts,
      address_type: addressTypes,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
