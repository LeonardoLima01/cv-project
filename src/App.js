import React, { useState } from "react";
import "./styles/style.css";
import Work from "./components/Work";
import Personal from "./components/Personal";
import Education from "./components/Education";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
function App() {
  const [personal, setPersonal] = useState({
    name: "Name",
    title: "Title",
    phone: "Phone",
    email: "Email",
    location: "Location",
    description: "Description",
  });

  let [workArr, setWorkArr] = useState([]);
  let [educationArr, setEducationArr] = useState([]);
  let [workCount, setWorkCount] = useState(() => 0);
  let [educationCount, setEducationCount] = useState(() => 0);

  const AddWork = () => {
    setWorkArr((prevWorkArr) => [
      ...prevWorkArr,
      {
        id: workCount,
        company: "",
        position: "",
        start: "",
        end: "",
        description: "",
      },
    ]);
    setWorkCount((prevWorkCount) => prevWorkCount + 1);
  };

  const AddEducation = () => {
    setEducationArr((prevEducationArr) => [
      ...prevEducationArr,
      {
        id: educationCount,
        course: "",
        university: "",
        start: "",
        end: "",
      },
    ]);
    setEducationCount((prevEducationCount) => prevEducationCount + 1);
  };

  const handleWorkChange = (value, name, id) => {
    const newArray = [...workArr];

    let index = newArray.findIndex((element) => element.id === id);

    // Exits on first run (prevents 'undefined' bug on page load))
    if (!newArray[index]) return;

    newArray[index][name] = value;
    setWorkArr((workArr = newArray));
  };

  const handleWorkDelete = (id) => {
    const newArray = [...workArr];

    // Get index
    let index = newArray.findIndex((element) => element.id === id);

    newArray.splice(index, 1);
    setWorkArr((workArr = newArray));
  };

  const handlePersonalChange = (value, name) => {
    setPersonal((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEducationDelete = (id) => {
    const newArray = [...educationArr];

    // Get index
    let index = newArray.findIndex((element) => element.id === id);

    newArray.splice(index, 1);
    setEducationArr(newArray);
  };

  const handleEducationChange = (value, name, id) => {
    const newArray = [...educationArr];

    let index = newArray.findIndex((element) => element.id === id);

    // Exits on first run (prevents 'undefined' bug on page load))
    if (!newArray[index]) return;

    newArray[index][name] = value;
    setEducationArr(newArray);
  };
  return (
    <>
      <div id="cv-editor">
        <>
          <h1 id="Personal-title">Personal</h1>
          <Personal handleChange={handlePersonalChange} />
          <h1>Work</h1>
          {workArr.map((work) => (
            <Work
              key={work.id}
              id={work.id}
              handleChange={handleWorkChange}
              handleDelete={handleWorkDelete}
            />
          ))}
          <button onClick={AddWork}>Add</button>
          <h1>Education</h1>
          {educationArr.map((work) => (
            <Education
              key={work.id}
              id={work.id}
              handleChange={handleEducationChange}
              handleDelete={handleEducationDelete}
            />
          ))}
          <button onClick={AddEducation}>Add</button>
        </>
      </div>
      <div id="cv-preview">
        <div id="header">
          <div>
            <h1 id="preview-name">{personal.name}</h1>
            <h3>{personal.title}</h3>
          </div>
          <div id="header-side-info">
            <h4>
              {" "}
              <FaPhoneSquareAlt />
              {personal.phone}
            </h4>
            <h4>
              <MdEmail />
              {personal.email}
            </h4>
            <h4>
              <IoLocationSharp />
              {personal.location}
            </h4>
          </div>
        </div>
        <p>{personal.description}</p>
        <h3 id="work-exp">Work Experience</h3>
        {workArr.map((work) => (
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
        {educationArr.map((education) => (
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

export default App;
