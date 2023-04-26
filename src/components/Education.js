import React from "react";

export default function Education(props) {
  return (
    <form>
      <input
        placeholder="Course"
        onChange={(e) => props.handleChange(e.target.value, "course", props.id)}
      ></input>
      <input
        placeholder="University"
        onChange={(e) =>
          props.handleChange(e.target.value, "university", props.id)
        }
      ></input>
      <input
        placeholder="Start Date"
        onChange={(e) => props.handleChange(e.target.value, "start", props.id)}
      ></input>
      <input
        placeholder="End Date"
        onChange={(e) => props.handleChange(e.target.value, "end", props.id)}
      ></input>

      <button type="button" onClick={() => props.handleDelete(props.id)}>
        Delete
      </button>
      <hr></hr>
    </form>
  );
}
