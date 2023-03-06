import { useState } from "react";

function TextInput({ type, label }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && "filled"} >
        {label}
      </label>
    </div>
  );
}

export default TextInput;
