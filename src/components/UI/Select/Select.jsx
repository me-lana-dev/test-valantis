import React from "react";
import classes from "../Select/Select.module.css";

const Select = ({ options, value, onChange }) => {
  return (
    <select
      className={classes.select}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
