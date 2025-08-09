import { useState } from "react";
import useInput from "../hooks/useInput";
import classes from "./ColorForm.module.css"

const ColorForm = (props) => {
  const [submitSuccess, setSubmitSuccess] = useState(true)
  const [submitMessage, setSubmitMessage] = useState("")

  const {
    value: enteredName, 
    isValid: enteredNameIsValid,
    hasError: NameInputIsInValid, 
    valueChangeHandler: NameInputChangeHandler, 
    inputBlurHandler: NameInputBlurHandler,
    reset: resetName,
  } = useInput(value => value.trim() !== "")

  const NameInputClasses = NameInputIsInValid ? 'form-control invalid' : 'form-control'

  const {
    value: enteredMessage, 
    isValid: enteredMessageIsValid,
    hasError: MessageInputIsInValid, 
    valueChangeHandler: MessageInputChangeHandler, 
    inputBlurHandler: MessageInputBlurHandler,
    reset: resetMessage,
  } = useInput(value => value.trim() !== "")

  const MessageInputClasses = MessageInputIsInValid ? 'form-control invalid' : 'form-control'

  let formIsValid = false

  if (enteredNameIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  async function postColor(palette) {
    try {
      const response = await fetch('https://palettes-e75a0-default-rtdb.firebaseio.com//Palettes.json', {
        method: "POST",
        body: JSON.stringify(palette),
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (!response.ok) {
       throw new Error("Something went wrong.")
      }
      setSubmitSuccess(true)
      setSubmitMessage("Color palette was sent!")
    }
    catch (error) {
      setSubmitSuccess(false)
      setSubmitMessage(error.message)
    }
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setSubmitMessage("")

    if (!props.palette) {
      setSubmitSuccess(false)
      setSubmitMessage("You need to create a palette to submit.")
      return;
    }

    if (!enteredNameIsValid || !enteredMessageIsValid) {
      return;
    }

    const newPalette = {
      name: enteredName,
      message: enteredMessage,
      colors: props.palette
    }

    postColor(newPalette);

    resetName();
    resetMessage();
  }

    return (
      <>
      <form onSubmit={formSubmissionHandler} className={classes.white}>
      
      <h2>Submit Palette</h2>
      <div className={NameInputClasses}>
        <label htmlFor='nam'>Name:</label>
        <input 
          type='text' 
          id='nam' 
          onChange={NameInputChangeHandler} 
          onBlur={NameInputBlurHandler}
          value={enteredName}
        />
        {NameInputIsInValid && <p className="error-text">Name should not be empty</p>}
      </div>
      <div className={MessageInputClasses}>
        <label htmlFor='msg'>Description:</label>
        <textarea rows="5"
          id='msg' 
          onChange={MessageInputChangeHandler} 
          onBlur={MessageInputBlurHandler}
          value={enteredMessage}
        />
        {MessageInputIsInValid && <p className="error-text">Description should not be empty</p>}
      </div>
      <div className='form-actions'>
        <span className={submitSuccess && classes.success || classes.error}>{submitMessage}</span>
        <button disabled={!formIsValid} className={classes.button}>Submit</button>
      </div>
    </form>
    </>
  );
}

export default ColorForm