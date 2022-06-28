import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import FormS from "./Components/Form/Form";
import PersonalTable from "./Components/DataTable/PersonalTable";
import { PersonalsDataContext } from "./Contexts/AllPersonals";
import { getAllPersonals } from "./utils/apiRequests";

function App() {
  const [didFormSubmit, setDidFormSubmit] = useState(false);
  const [data, setData] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPersonals();
      setData(data);
    };

    fetchData();
  }, [didFormSubmit]);

  return (
    <div className="App">
      <PersonalsDataContext.Provider value={{ data }}>
        <FormS setDidFormSubmit={setDidFormSubmit} formSubmit={didFormSubmit} />
        <PersonalTable />
      </PersonalsDataContext.Provider>
    </div>
  );
}

export default App;
