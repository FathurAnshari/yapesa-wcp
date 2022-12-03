import React, { useState, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import LoadingSpinner from "../UI/LoadingSpinner";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const formik = useFormik({
    // initial values
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    // validation schema
    validationSchema: Yup.object({
      user_name: Yup.string().required(),
      user_email: Yup.string().required().email("Invalid email format"),
      message: Yup.string().required(),
    }),
  });

  const sendEmail = (e) => {
    e.preventDefault();
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
          setShowNotif(true);
          form.current.reset();
          setTimeout(() => setShowNotif(false), 3000);
        }
        // (error) => {
        //   setIsLoading(false);
        //   console.log(error.text);
        // }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          ref={name}
          placeholder="Fathur Muhammad Fadlan Anshari"
          autoComplete="off"
          required
          {...formik.getFieldProps("user_name")}
        />
        {formik.touched.user_name && formik.errors.user_name && (
          <div className="error">Nama tidak boleh kosong</div>
        )}

        <label>Email</label>
        <input
          type="email"
          name="user_email"
          ref={email}
          placeholder="email@gmail.com"
          autoComplete="off"
          required
          {...formik.getFieldProps("user_email")}
        />
        {formik.touched.user_email && formik.errors.user_email && (
          <div className="error">Email tidak boleh kosong</div>
        )}

        <label>Message</label>
        <textarea
          name="message"
          ref={message}
          placeholder="Kirimkan saran & kritik untuk kemajuan YAPESA"
          required
          {...formik.getFieldProps("message")}
        />
        {formik.touched.message && formik.errors.message && (
          <div className="error">Message tidak boleh kosong</div>
        )}

        {isLoading ? <LoadingSpinner /> : <input type="submit" value="Send" />}
        {showNotif ? (
          <p style={{ color: "#fff" }}>Your email have been sent!</p>
        ) : null}
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
