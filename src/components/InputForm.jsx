import React from "react";

const InputForm = ({ label, placeholder, value, setValue }) => {
  return (
    <div className={`form-group ${label === "내용" ? "content" : ""}`}>
      <label>{label}</label>
      <textarea
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputForm;
