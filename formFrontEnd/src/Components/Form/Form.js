import React, { useState, useContext } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import styles from "./Form.module.css";
import Phoneinput from "./PhoneInput";
import AddAddressModal from "./Modal";
import { addPersonal } from "../../utils/apiRequests";
import { PersonalsDataContext } from "../../Contexts/AllPersonals";
import { getDistrictsOfCity } from "../../utils/apiRequests";

function FormS({ setDidFormSubmit, formSubmit }) {
  //  form validation
  const [validated, setValidated] = useState(false);

  // booleans
  const [citySelected, setCitySelected] = useState(false);

  // Districts of specific city
  const [districts, setDistricts] = useState("");
  // form data
  const [phoneInput, setPhoneInput] = useState(null);
  const [CurrentSelectedAddress, setCurrentSelectedAddress] = useState(null);
  const [newAddressType, setNewAddressAsSelected] = useState(null);
  const [formData, setFormData] = useState("");
  //  all Personals
  const { data } = useContext(PersonalsDataContext);

  const handleChange = (e) => {
    if (e.target.id === "address_type") {
      setNewAddressAsSelected(null);
      setCurrentSelectedAddress(e.target.value);
    }
    if (e.target.id === "type") {
      setNewAddressAsSelected(e.target.value);
    }

    if (e.target.id === "city_id") {
      setCitySelected(true);
      const fetchData = async () => {
        const data = await getDistrictsOfCity(e.target.value);
        setDistricts(data);
      };

      fetchData();
    }
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const addPhoneNumber = (InputFields) => {
    const PhoneNumbers = InputFields.map((el) => el.phoneNumber);
    setPhoneInput(PhoneNumbers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);

    if (
      formData.name &&
      formData.city_id &&
      formData.surname &&
      formData.birthday &&
      formData.birthplace &&
      formData.district_id &&
      formData.address_type &&
      phoneInput &&
      phoneInput[0] !== ""
    ) {
      setDidFormSubmit(!formSubmit);
      addPersonal(formData, phoneInput, newAddressType);
    } else {
      alert("All form inputs are required");
    }
  };
  return (
    <div className={styles.formContainer}>
      <Form>
        <Form.Group as={Col} controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            type="text"
            isInvalid={!formData.name}
            placeholder="Enter name"
          />
          <Form.Control.Feedback type="invalid">
            Please choose a name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" as={Col} controlId="surname">
          <Form.Label>SurName</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            type="text"
            isInvalid={!formData.surname}
            placeholder="Enter surname"
          />
          <Form.Control.Feedback type="invalid">
            Please choose a surname.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="birthday">
          <Form.Label>BirthDay</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            placeholder="2022-04-18"
            isInvalid={!formData.birthday}
          />
          <Form.Control.Feedback type="invalid">
            Please add a birthday.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="birthplace">
          <Form.Label>BirthPlace</Form.Label>
          <Form.Control
            required
            onChange={handleChange}
            placeholder="Denizli"
            isInvalid={!formData.birthplace}
          />
          <Form.Control.Feedback type="invalid">
            Please add a birthplace.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="city_id">
          <Form.Label>City</Form.Label>
          <Form.Select
            required
            onChange={handleChange}
            defaultValue="Choose..."
            isInvalid={!formData.city_id}
          >
            <option>Choose...</option>
            {data.city
              ? data.city.map((el) => (
                  <option key={el.id} value={el.id}>
                    {el.city}
                  </option>
                ))
              : null}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select a city.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} controlId="district_id">
          <Form.Label>District</Form.Label>
          <Form.Select
            required
            disabled={!citySelected}
            onChange={handleChange}
            defaultValue="Choose..."
            isInvalid={!formData.district_id}
          >
            <option>Choose...</option>
            {districts
              ? districts.map((el) => (
                  <option key={el.id} value={el.city_id}>
                    {el.district}
                  </option>
                ))
              : null}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Please select a district.
          </Form.Control.Feedback>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="address_type">
            <Form.Label>AddressType</Form.Label>
            <Form.Select
              required
              onChange={handleChange}
              value={newAddressType?.type}
              isInvalid={!formData.address_type}
            >
              {!CurrentSelectedAddress ? <option>Choose...</option> : ""}
              {data.address_type
                ? data.address_type.map((el) => (
                    <option key={el.id} value={el.id}>
                      {el.type}
                    </option>
                  ))
                : ""}
              {/* below option is default if newAddressType exist*/}
              {newAddressType ? <option>{newAddressType.type} </option> : ""}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select an address type.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-4" as={Col}>
            <AddAddressModal
              newAddressType={newAddressType}
              setNewAddressAsSelected={setNewAddressAsSelected}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Phoneinput addPhoneNumber={addPhoneNumber} />

        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormS;
