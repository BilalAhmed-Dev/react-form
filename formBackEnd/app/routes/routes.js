const express = require("express");
const AddressType = require("../models/address_typeModel");
const { addAddressType } = require("../Controllers/addAddressTypeController");
const { addCity } = require("../Controllers/cityController");
const {
  addDistrict,
  getDistrictsOfCity,
} = require("../Controllers/districtController");
const {
  addPersonal,
  getAllPersonal,
} = require("../Controllers/personalController");

const router = express.Router();

//Post Method
router.post("/personal/add", addPersonal);

router.post("/personal/address-type", addAddressType);

router.post("/personal/city", addCity);

router.post("/personal/district", addDistrict);

router.get("/personal", getAllPersonal);
router.get("/personal/district/:id", getDistrictsOfCity);

module.exports = router;
