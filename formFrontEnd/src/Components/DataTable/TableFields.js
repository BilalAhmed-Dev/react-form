function TableFields({ element }) {
  return (
    <tr>
      <td>{element.name}</td>
      <td>{element.surname}</td>
      <td>{element.birthday}</td>
      <td>{element.birthplace}</td>
    </tr>
  );
}

export default TableFields;
