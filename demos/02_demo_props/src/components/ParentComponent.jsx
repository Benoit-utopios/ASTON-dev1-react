import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  let maVariable = "Toto";

  const sayHelloFromParent = () => {
    console.log("Hello from parent");
  };

  return (
    <>
      <ChildComponent
        maVariable={maVariable}
        sayHelloFromParent={sayHelloFromParent}
      />
      ;
      <ChildComponent
        maVariable="Tata"
        sayHelloFromParent={sayHelloFromParent}
      />
      ;
      <ChildComponent
        maVariable="Titi"
        sayHelloFromParent={sayHelloFromParent}
      />
      ;
    </>
  );
};

export default ParentComponent;
