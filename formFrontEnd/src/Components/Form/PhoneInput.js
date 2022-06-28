import { useState } from "react";
function Phoneinput({ addPhoneNumber }) {
  const [inputFields, setInputFields] = useState([
    {
      phoneNumber: "",
    },
  ]);

  const addInputField = (e) => {
    e.preventDefault();
    setInputFields([
      ...inputFields,
      {
        phoneNumber: "",
      },
    ]);

    addPhoneNumber(inputFields);
  };
  const removeInputFields = (index) => {
    index.preventDefault();
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);

    addPhoneNumber(inputFields);
  };
  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);

    addPhoneNumber(inputFields);
  };
  return (
    <div>
      {inputFields.map((data, index) => {
        const { phoneNumber } = data;
        return (
          <div className="row mb-3" key={index}>
            <div className="col">
              <div className="form-group">
                <input
                  type="text"
                  onChange={(evnt) => handleChange(index, evnt)}
                  value={phoneNumber}
                  name="phoneNumber"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div>
              {inputFields.length !== 1 ? (
                <button
                  className="btn btn-outline-danger mt-3"
                  onClick={removeInputFields}
                >
                  x
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}

      <div className="row">
        <div className="col">
          <button
            className="btn btn-outline-success mb-2"
            onClick={addInputField}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-sm-4"></div>
    </div>
  );
}
export default Phoneinput;
