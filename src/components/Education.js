import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <form>
        <input
          placeholder="Course"
          onChange={(e) =>
            this.props.handleChange(e.target.value, "course", this.props.id)
          }
        ></input>
        <input
          placeholder="University"
          onChange={(e) =>
            this.props.handleChange(e.target.value, "university", this.props.id)
          }
        ></input>
        <input
          placeholder="Start Date"
          onChange={(e) =>
            this.props.handleChange(e.target.value, "start", this.props.id)
          }
        ></input>
        <input
          placeholder="End Date"
          onChange={(e) =>
            this.props.handleChange(e.target.value, "end", this.props.id)
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
