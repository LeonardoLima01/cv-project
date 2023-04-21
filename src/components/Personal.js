import React, { Component } from "react";

export default class Personal extends Component {
  render() {
    return (
      <>
        <form>
          <input
            placeholder="Name"
            onChange={(e) => this.props.handleChange(e.target.value, "name")}
          ></input>
          <input
            placeholder="Title"
            onChange={(e) => this.props.handleChange(e.target.value, "title")}
          ></input>
          <input
            placeholder="Phone"
            onChange={(e) => this.props.handleChange(e.target.value, "phone")}
          ></input>
          <input
            placeholder="Email"
            onChange={(e) => this.props.handleChange(e.target.value, "email")}
          ></input>
          <input
            placeholder="Location"
            onChange={(e) =>
              this.props.handleChange(e.target.value, "location")
            }
          ></input>
          <input
            placeholder="Description"
            onChange={(e) =>
              this.props.handleChange(e.target.value, "description")
            }
          ></input>
        </form>
      </>
    );
  }
}
