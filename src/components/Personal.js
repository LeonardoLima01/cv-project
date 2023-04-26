import React from "react";

export default function Personal(props) {
  return (
    <>
      <form>
        <input
          placeholder="Name"
          onChange={(e) => props.handleChange(e.target.value, "name")}
        ></input>
        <input
          placeholder="Title"
          onChange={(e) => props.handleChange(e.target.value, "title")}
        ></input>
        <input
          placeholder="Phone"
          onChange={(e) => props.handleChange(e.target.value, "phone")}
        ></input>
        <input
          placeholder="Email"
          onChange={(e) => props.handleChange(e.target.value, "email")}
        ></input>
        <input
          placeholder="Location"
          onChange={(e) => props.handleChange(e.target.value, "location")}
        ></input>
        <input
          placeholder="Description"
          onChange={(e) => props.handleChange(e.target.value, "description")}
        ></input>
      </form>
    </>
  );
}
