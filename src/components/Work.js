import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

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
        <button
          type="button"
          onClick={() => this.props.handleDelete(this.props.id)}
        >
          Delete
        </button>
        <hr></hr>
      </form>
    );
  }
}
