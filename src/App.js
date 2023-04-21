import React from "react";
import "./styles/style.css";
import Work from "./components/Work";
import Personal from "./components/Personal";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      personal: {
        name: "",
        title: "",
        phone: "",
        email: "",
        location: "",
        description: "",
      },
      workArr: [],
      educationArr: [],
      workCount: 0,
    };
  }

  AddWork = () => {
    this.setState((prevState) => ({
      workArr: [
        ...this.state.workArr,
        { id: prevState.workCount, name: "", age: "" },
      ],
      cworkCountount: prevState.workCount + 1,
    }));
  };

  handleWorkChange = (value, name, id) => {
    const newArray = [...this.state.workArr];

    let index = newArray.findIndex((element) => element.id === id);
    console.log("index modified: " + index);

    // Exits on first run (prevents 'undefined' bug on page load))
    if (!newArray[index]) return console.log("exit");

    newArray[index][name] = value;
    this.setState({ workArr: newArray });
  };

  handleDelete = (id) => {
    const newArray = [...this.state.workArr];

    // Get index
    let index = newArray.findIndex((element) => element.id === id);
    console.log("index deleted: " + index);

    newArray.splice(index, 1);
    this.setState({ workArr: newArray });
  };

  handlePersonalChange = (value, name) => {
    const newArray = this.state.personal;
    newArray[name] = value;
    this.setState({ personal: newArray });
  };

  render() {
    return (
      <>
        <div id="cv-editor">
          <>
            <h1>Personal</h1>
            <Personal handleChange={this.handlePersonalChange} />
            <h1>Work</h1>
            {this.state.workArr.map((work) => (
              <Work
                key={work.id}
                id={work.id}
                handleChange={this.handleWorkChange}
                handleDelete={this.handleDelete}
              />
            ))}
            <button onClick={this.AddWork}>Add</button>
            <h1>Education</h1>
            {this.state.workArr.map((work) => (
              <Work
                key={work.id}
                id={work.id}
                handleChange={this.handleWorkChange}
                handleDelete={this.handleDelete}
              />
            ))}
          </>
        </div>
      </>
    );
  }
}

export default App;
