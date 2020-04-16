import React from "react";

function Form(props) {
  return (
    <div>
      <form action="" onSubmit={props.onSubmit}>
        <input
          className="inputCity"
          type="text"
          onChange={props.onChange}
          placeholder="Search City"
        />

        <button className="submitBtn" type="submit">
          Select
        </button>
      </form>
    </div>
  );
}

export default Form;
