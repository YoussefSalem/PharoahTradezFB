import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vqvbbj9",
        "template_9qspd4h",
        form.current,
        "11-JdzWlbvWZVtU41"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input
        className="form-control input-box"
        type="email"
        placeholder="Enter Email"
        aria-label="email"
        type="email"
        name="user_email"
      />

      <input
        onClick={() => {
          alert("Subscribed To Newsletter");
        }}
        type="submit"
        value="Send"
      />
    </form>
  );
};
