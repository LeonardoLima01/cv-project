import React from "react";

export default class Personal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form id="personal-form">
        <input
          placeholder="Name"
          onChange={(e) =>
            this.props.handleChange("personalName", e.target.value)
          }
        ></input>
        <input
          placeholder="Title"
          onChange={(e) =>
            this.props.handleChange("personalTitle", e.target.value)
          }
        ></input>
        <input
          placeholder="Phone"
          onChange={(e) =>
            this.props.handleChange("personalPhone", e.target.value)
          }
        ></input>
        <input
          placeholder="Email"
          onChange={(e) =>
            this.props.handleChange("personalEmail", e.target.value)
          }
        ></input>
        <input
          placeholder="Location"
          onChange={(e) =>
            this.props.handleChange("personalLocation", e.target.value)
          }
        ></input>
        <input
          placeholder="Description"
          onChange={(e) =>
            this.props.handleChange("personalDescription", e.target.value)
          }
        ></input>
      </form>
    );
  }
}
