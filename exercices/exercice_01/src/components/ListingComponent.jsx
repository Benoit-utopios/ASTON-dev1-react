const ListingComponent = () => {
  const myPersons = [
    { firstname: "Albert", lastname: "DUPONT" },
    { firstname: "Maria", lastname: "DUPONT" },
    { firstname: "Chloé", lastname: "DUPONT" },
    { firstname: "Sylvia", lastname: "DUPONT" },
  ];

  return (
    <>
      <h1>My persons</h1>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
          {myPersons.map((person, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{person.firstname}</td>
              <td>{person.lastname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListingComponent;
