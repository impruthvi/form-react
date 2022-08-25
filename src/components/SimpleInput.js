import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid:enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler:nameBlurHandler,
    reset: resetNameInput
  } = useInput(value=>value.trim() !=='');


  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }


  const formSubmitHandler = (event) => {
    event.preventDefault();
  

    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    resetNameInput();
  };

  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
