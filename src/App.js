import React from "react";
import "./styles/style.css";
import Work from "./components/Work";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      workArr: [],
    };
  }

  AddWork = () => {
    this.setState(() => ({
      workArr: [
        ...this.state.workArr,
        { id: this.state.workArr.length, name: "", age: "" },
      ],
    }));
  };

  handleWorkChange = (value, name, id) => {
    const newArray = [...this.state.workArr];

    // Exits on first run (prevents 'undefined' bug on page load))
    if (!newArray[id]) return;
    console.log(newArray[id]);

    newArray[id][name] = value;
    this.setState({ workArr: newArray });
  };

  render() {
    return (
      <>
        <div id="cv-editor">
          <>
            {this.state.workArr.map((_, i) => (
              <Work id={i} handleChange={this.handleWorkChange} />
            ))}
          </>
          <button onClick={this.AddWork}>Add</button>
        </div>
      </>
    );
  }
}

export default App;
