import React, { useState } from "react";

const useDropDown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      {label === "Animal" ? `${label} *` : label}
      <select
        disabled={options.length === 0}
        id={id}
        value={state}
        placeholder="Breed"
        onChange={event => setState(event.target.value)}
        onBlur={event => setState(event.target.value)}
      >
        <option>All</option>
        {options.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, setState];
};

export default useDropDown;
