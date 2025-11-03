import classes from "./FirstComponent.module.css";

const FirstComponent = () => {
  let nom = "Tata";

  const maFonction = () => {
    let age = 18;
    return "Je suis " + nom;
  };

  const myPersons = [
    { firstname: "Toto", age: 18 },
    { firstname: "Toto2", age: 20 },
    { firstname: "Toto3", age: 28 },
    { firstname: "Toto4", age: 38 },
    { firstname: "Toto5", age: 48 },
  ];

  return (
    <>
      <div>
        <h1 className={classes.paragrapheRouge}>Mon premier composant</h1>
        <p className={classes.paragrapheRouge}>Je suis {nom}</p>
        <p>{maFonction()}</p>
        <ul>
          {myPersons.map((person, index) => (
            <li>
              {index} | Prénom : {person.firstname} - Age : {person.age}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FirstComponent;
