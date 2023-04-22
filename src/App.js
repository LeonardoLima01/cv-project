import React from "react";
import "./styles/style.css";
import Work from "./components/Work";
import Personal from "./components/Personal";
import Education from "./components/Education";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      personal: {
        name: "Name",
        title: "Title",
        phone: "Phone",
        email: "Email",
        location: "Location",
        description: "Description",
      },
      workArr: [],
      educationArr: [],
      workCount: 0,
      educationCount: 0,
    };
  }

  AddWork = () => {
    this.setState((prevState) => ({
      workArr: [
        ...this.state.workArr,
        {
          id: prevState.workCount,
          company: "",
          position: "",
          start: "",
          end: "",
          description: "",
        },
      ],
      workCount: prevState.workCount + 1,
    }));
  };

  AddEducation = () => {
    this.setState((prevState) => ({
      educationArr: [
        ...this.state.educationArr,
        {
          id: prevState.educationCount,
          course: "",
          university: "",
          start: "",
          end: "",
        },
      ],
      educationCount: prevState.educationCount + 1,
    }));
  };

  handleWorkChange = (value, name, id) => {
    const newArray = [...this.state.workArr];

    let index = newArray.findIndex((element) => element.id === id);

    // Exits on first run (prevents 'undefined' bug on page load))
    if (!newArray[index]) return;

    newArray[index][name] = value;
    this.setState({ workArr: newArray });
  };

  handleWorkDelete = (id) => {
    const newArray = [...this.state.workArr];

    // Get index
    let index = newArray.findIndex((element) => element.id === id);

    newArray.splice(index, 1);
    this.setState({ workArr: newArray });
  };

  handlePersonalChange = (value, name) => {
    const newArray = this.state.personal;
    newArray[name] = value;
    this.setState({ personal: newArray });
  };

  handleEducationDelete = (id) => {
    const newArray = [...this.state.educationArr];

    // Get index
    let index = newArray.findIndex((element) => element.id === id);

    newArray.splice(index, 1);
    this.setState({ educationArr: newArray });
  };

  handleEducationChange = (value, name, id) => {
    const newArray = [...this.state.educationArr];

    let index = newArray.findIndex((element) => element.id === id);

    // Exits on first run (prevents 'undefined' bug on page load))
    if (!newArray[index]) return;

    newArray[index][name] = value;
    this.setState({ educationArr: newArray });
  };

  render() {
    return (
      <>
        <div id="cv-editor">
          <>
            <h1 id="Personal-title">Personal</h1>
            <Personal handleChange={this.handlePersonalChange} />
            <h1>Work</h1>
            {this.state.workArr.map((work) => (
              <Work
                key={work.id}
                id={work.id}
                handleChange={this.handleWorkChange}
                handleDelete={this.handleWorkDelete}
              />
            ))}
            <button onClick={this.AddWork}>Add</button>
            <h1>Education</h1>
            {this.state.educationArr.map((work) => (
              <Education
                key={work.id}
                id={work.id}
                handleChange={this.handleEducationChange}
                handleDelete={this.handleEducationDelete}
              />
            ))}
            <button onClick={this.AddEducation}>Add</button>
          </>
        </div>
        <div id="cv-preview">
          <div id="header">
            <div>
              <h1 id="preview-name">{this.state.personal.name}</h1>
              <h3>{this.state.personal.title}</h3>
            </div>
            <div id="header-side-info">
              <h4>
                {" "}
                <FaPhoneSquareAlt />
                {this.state.personal.phone}
              </h4>
              <h4>
                <MdEmail />
                {this.state.personal.email}
              </h4>
              <h4>
                <IoLocationSharp />
                {this.state.personal.location}
              </h4>
            </div>
          </div>
          <p>{this.state.personal.description}</p>
          <h3 id="work-exp">Work Experience</h3>
          {this.state.workArr.map((work) => (
            <div className="work-exp-container">
              <div className="work-exp-top">
                <p className="work-position">{work.position}</p>
                <p>
                  <span className="company-name">{work.company}</span> |{" "}
                  {work.start}-{work.end}
                </p>
              </div>
              <p className="work-description">{work.description}</p>
            </div>
          ))}
          <h3 id="education-exp">Education</h3>
          {this.state.educationArr.map((education) => (
            <div className="work-exp-container">
              <div className="work-exp-top">
                <p>{education.course}</p>
                <p>
                  <span className="company-name">{education.university}</span>{" "}
                  <span>|</span> {education.start}
                  <span>-</span>
                  {education.end}
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
