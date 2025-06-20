import React, { useState } from "react";
import classes from './UserInput.module.css'
const initialUserInput = {
  "current-savings": 100000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};
let UserInput = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);
  let submitHandler = (event) => {
    event.preventDefault(); //prevent browser default behaviour

    // console.log("Submit");
    props.onCalculate(userInput)
  };

  let resetHandler = () => {
    setUserInput(initialUserInput)
  };

  // global input handler
  let inputChangeHandler = (input, value) => {
    // here first input target to id / htmlFor value and  2nd value target to value inserted by the user
    // console.log(input, value);

    setUserInput((prevInput) => {
       return {
        ...prevInput,
        [input] : value
       }
    })
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            onChange={(event) => {
              inputChangeHandler("current-savings", event.target.value);
            }}
            value = {userInput["current-savings"]}
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            onChange={(event) => {
              inputChangeHandler("yearly-contribution", event.target.value);
            }}
            value={userInput["yearly-contribution"]}
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            onChange={(event) => {
              inputChangeHandler("expected-return", event.target.value);
            }}
            value={userInput["expected-return"]}
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            onChange={(event) => {
              inputChangeHandler("duration", event.target.value);
            }}
            value={userInput["duration"]}
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" onClick={resetHandler} className={classes.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
