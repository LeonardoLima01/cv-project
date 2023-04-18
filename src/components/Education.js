import React from "react";

export default class Education extends React.Component {
  render() {
    return (
      <>
        <form id="personal-form">
          <input placeholder="Course / Program"></input>
          <input placeholder="University"></input>
          <input placeholder="Start date"></input>
          <input placeholder="End date"></input>
          <input placeholder="Description"></input>
        </form>
      </>
    );
  }
}
