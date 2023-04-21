import React, { Component } from "react";

export default class Work extends Component {
  render() {
    return (
      <form>
        <input
          placeholder="Name"
          onChange={(e) =>
            this.props.handleChange(e.target.value, "name", this.props.id)
          }
        ></input>
        <input
          placeholder="Age"
          onChange={(e) =>
            this.props.handleChange(e.target.value, "age", this.props.id)
          }
        ></input>
        <hr></hr>
      </form>
    );
  }
}
