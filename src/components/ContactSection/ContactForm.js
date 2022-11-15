import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import LoadingSpinner from "../UI/LoadingSpinner";

// npm i @emailjs/browser

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
  const [enteredMessageIsValid, setEnteredMessageIsValid] = useState(true);

  const form = useRef();

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const messageInputChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);

      return;
    }
    if (enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
      return;
    }
    if (enteredMessage.trim() === "") {
      setEnteredMessageIsValid(false);
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_5bx8gz8",
        "template_wsre8vs",
        form.current,
        "eLkI8YbuOGUS3oCu7"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsLoading(false);
          e.target.reset();
        },
        (error) => {
          setIsLoading(false);
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}

        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
        />
        {!enteredEmailIsValid && (
          <p className="error-text">Email must not be empty</p>
        )}

        <label>Message</label>
        <textarea
          name="message"
          value={enteredMessage}
          onChange={messageInputChangeHandler}
        />
        {!enteredMessageIsValid && (
          <p className="error-text">Message must not be empty</p>
        )}

        {isLoading ? <LoadingSpinner /> : <input type="submit" value="Send" />}
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 100%;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #01bf71;
      color: #010606;
      border: none;
    }
  }
`;
