import React from "react";
import Personal from "./components/Personal";
import Work from "./components/Work";
import Education from "./components/Education";
import "./styles/style.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      personalName: "",
      personalTitle: "",
      personalPhone: "",
      personalEmail: "",
      personalLocation: "",
      personalDescription: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (prop, value) => {
    this.setState({ [prop]: value });
  };

  render() {
    return (
      <>
        <div id="cv-editor">
          <div id="personal-container">
            <h1>Personal</h1>
            <Personal handleChange={this.handleChange} />
          </div>
          <div id="work-container">
            <h1>Work</h1>
            <Work />
          </div>
          <div id="education-container">
            <h1>Education</h1>
            <Education />
          </div>
        </div>
        <div id="cv-preview">
          <h1>Preview Here!</h1>
        </div>
      </>
    );
  }
}

export default App;
