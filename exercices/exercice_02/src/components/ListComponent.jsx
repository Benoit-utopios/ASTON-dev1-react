const ListComponent = () => {
  const listing = [10, 15, 20, 30];

  const addElement = () => {
    listing.push(10);
    console.log(listing);
  };

  return (
    <>
      <button onClick={addElement}>Add 10</button>
      <ul>
        {listing.map((nb, index) => (
          <li key={index}>{nb}</li>
        ))}
      </ul>
    </>
  );
};

export default ListComponent;
