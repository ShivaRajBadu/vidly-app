import React from "react";

const Input = ({ name, label, value, onChange, error, type = "text" }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        className="form-control"
        type={type}
      />
      {error && <div className="alert alert-danger mt-2 p-1">{error}</div>}
    </div>
  );
};

export default Input;
