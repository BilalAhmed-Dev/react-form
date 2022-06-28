import { Table } from "react-bootstrap";
import { useContext } from "react";
import { PersonalsDataContext } from "../../Contexts/AllPersonals";
import TableFields from "./TableFields";

function PersonalTable() {
  const { data } = useContext(PersonalsDataContext);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>name</th>
          <th>surname</th>
          <th>birthday</th>
          <th>birthplace</th>
        </tr>
      </thead>
      <tbody>
        {data.personals
          ? data.personals.map((el) => (
              <TableFields key={el.personal_id} element={el} />
            ))
          : null}
      </tbody>
    </Table>
  );
}

export default PersonalTable;
