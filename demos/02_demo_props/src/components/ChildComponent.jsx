const ChildComponent = (props) => {
  let maVariable = props.maVariable;
  let sayHelloFromParent = props.sayHelloFromParent;

  const sayHello = () => {
    console.log("Hello");
    sayHelloFromParent();
  };

  return (
    <>
      <h1>ChildComponent</h1>
      <p>ma variable : {maVariable}</p>
      <button onClick={sayHelloFromParent}>Click here !</button>
      <button onClick={sayHello}>Click here 2 !</button>
    </>
  );
};

export default ChildComponent;
