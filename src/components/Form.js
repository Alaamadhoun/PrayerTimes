import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getPrayer}>
      <input type="text" name="city" placeholder="City..." />
      <input type="text" name="country" placeholder="Country..." />
      <button>Get Timings</button>
    </form>
  );
};

export default Form;
