import React from "react";
import "./styles/style.css";
import Work from "./components/Work";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      workArr: [],
      count: 0,
    };
  }

  AddWork = () => {
    this.setState((prevState) => ({
      workArr: [
        ...this.state.workArr,
        { id: prevState.count, name: "", age: "" },
      ],
      count: prevState.count + 1,
    }));
  };

  handleWorkChange = (value, name, id) => {
    const newArray = [...this.state.workArr];

    let index = newArray.findIndex((element) => element.id == id);
    console.log("index modified: " + index);

    // Exits on first run (prevents 'undefined' bug on page load))
    if (!newArray[index]) return console.log("exit");

    newArray[index][name] = value;
    this.setState({ workArr: newArray });
  };

  handleDelete = (id) => {
    const newArray = [...this.state.workArr];

    // Get index
    let index = newArray.findIndex((element) => element.id == id);
    console.log("index deleted: " + index);

    newArray.splice(index, 1);
    this.setState({ workArr: newArray });
  };

  render() {
    return (
      <>
        <div id="cv-editor">
          <>
            {this.state.workArr.map(
              (work, i) => (
                console.log("sas"),
                (
                  <Work
                    key={work.id}
                    id={work.id}
                    handleChange={this.handleWorkChange}
                    handleDelete={this.handleDelete}
                  />
                )
              )
            )}
          </>
          <button onClick={this.AddWork}>Add</button>
        </div>
      </>
    );
  }
}

export default App;
