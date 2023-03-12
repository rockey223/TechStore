
import {useForm,  ValidationError } from '@formspree/react';
function TextInput({ type, label }) {
  const [state, handleSubmit] = useForm("xleklnlk");

  return (

    <>
    <div className="input-container">
      <input type={type} name={label}/>

      <label className={"filled"} >
        {label}
      </label>
    </div>
    <ValidationError 
        prefix={label} 
        field={label}
        errors={state.errors}
      />

      </>
  );
}

export default TextInput;
