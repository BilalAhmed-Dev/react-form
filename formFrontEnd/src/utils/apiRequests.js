import axios from "axios";
import { API, apiKey } from "./Constants";

const headers = {
  "x-api-key": apiKey,
};

export const getAllPersonals = async () => {
  let config = {
    method: "get",
    url: `${API}/personal`,
    headers,
  };

  try {
    const { data } = await axios(config);
    console.log("Success but Database is empty");
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getDistrictsOfCity = async (cityId) => {
  let config = {
    method: "get",
    url: `${API}/personal/district/${cityId}`,
    headers,
  };

  try {
    const { data } = await axios(config);
    return data.district;
  } catch (err) {
    console.log(err);
  }
};

export const addPersonal = async (formData, phoneNumbers, newAddressType) => {
  if (newAddressType) {
    const { id } = newAddressType;
    formData.address_type = id;
  }
  let config = {
    method: "post",
    url: `${API}/personal/add`,
    headers,
    params: {
      phone: phoneNumbers,
      ...formData,
    },
  };

  try {
    const res = await axios(config);
  } catch (err) {
    console.log(err);
  }
};

//  add address is not complete and not tested
export const addAddress = async (newAddress) => {
  let config = {
    method: "post",
    url: `${API}/personal/address-type`,
    headers,

    params: {
      type: newAddress,
    },
  };

  try {
    const { data } = await axios(config);
    return data;
  } catch (err) {
    console.log(err);
  }
};
