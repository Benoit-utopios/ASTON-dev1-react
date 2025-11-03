import { useState } from "react";

const StateLessComponent = () => {
  const [monPrenom, setMonPrenom] = useState("Toto");
  const [maVariable, setMaVariable] = useState(0);
  const [myText, setMyText] = useState("");

  const changePrenom = () => {
    setMonPrenom("Titi");
  };

  const textInput = (event) => {
    setMyText(event.target.value);
    console.log(myText);
  };

  return (
    <>
      <h1>StatelessComponent</h1>
      <p>Mon prénom : {monPrenom}</p>
      <button onClick={changePrenom}>ChangePrenom</button>
      <input type="text" value={myText} onInput={textInput}></input>
      <p>{myText}</p>
    </>
  );
};

export default StateLessComponent;
