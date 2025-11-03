import { PureComponent } from "react";

class StateFullComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      monPrenom: "Toto",
      maVariable: 0,
    };
  }

  changePrenom() {
    this.setState((previousState) => ({ ...previousState, monPrenom: "Titi" }));
  }

  render() {
    return (
      <>
        <h1>StateFullComponent</h1>
        <p>Mon prénom : {this.state.monPrenom}</p>
        <button onClick={this.changePrenom.bind(this)}>ChangePrenom</button>
      </>
    );
  }
}

export default StateFullComponent;
