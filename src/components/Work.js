import React from "react";

export default function Work(props) {
  return (
    <form>
      <input
        placeholder="Company"
        onChange={(e) =>
          props.handleChange(e.target.value, "company", props.id)
        }
      ></input>
      <input
        placeholder="Position"
        onChange={(e) =>
          props.handleChange(e.target.value, "position", props.id)
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
      <input
        placeholder="Description"
        onChange={(e) =>
          props.handleChange(e.target.value, "description", props.id)
        }
      ></input>
      <button type="button" onClick={() => props.handleDelete(props.id)}>
        Delete
      </button>
      <hr></hr>
    </form>
  );
}
