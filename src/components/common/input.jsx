import React from "react";

const Input = ({ name, label, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus={false}
        value={value}
        onChange={onChange}
        autoFocus
        name={name}
        id={name}
        className="form-control"
        type={name}
      />
      {error && <div className="alert alert-danger mt-2 p-1">{error}</div>}
    </div>
  );
};

export default Input;
