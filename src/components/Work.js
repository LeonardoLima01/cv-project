import React, { Component } from "react";

export default class Work extends Component {
  render() {
    return (
      <form>
        <input
          placeholder="Company"
          onChange={(e) =>
            this.props.handleChange(e.target.value, "company", this.props.id)
          }
        ></input>
        <input
          placeholder="Position"
          onChange={(e) =>
            this.props.handleChange(e.target.value, "position", this.props.id)
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
        <input
          placeholder="Description"
          onChange={(e) =>
            this.props.handleChange(
              e.target.value,
              "description",
              this.props.id
            )
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
