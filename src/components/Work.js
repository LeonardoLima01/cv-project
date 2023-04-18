import React from "react";

export default class Work extends React.Component {
  render() {
    return (
      <form id="work-form">
        <input placeholder="Company"></input>
        <input placeholder="Position"></input>
        <input placeholder="Start date"></input>
        <input placeholder="End date"></input>
        <input placeholder="Description"></input>
      </form>
    );
  }
}
