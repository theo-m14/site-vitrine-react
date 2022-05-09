import React, { useRef } from "react";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
init(process.env.PUBLIC_KEY);

const ContactForm = () => {
  const form = useRef();
  let formMessage;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6fhdwb4",
        "template_ka1zo2f",
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMessage = document.querySelector(".form-message p");
          formMessage.innerText = "Message envoyé";
          formMessage.classList.add("success");
          setTimeout(() => {
            formMessage.classList.remove("success");
            formMessage.innerText = "";
          }, 2000);
        },
        (error) => {
          console.log(error.text);
          formMessage.innerText = "Une erreur est survenue veuillez réessayer";
          formMessage.classList.add("error");
          setTimeout(() => {
            formMessage.classList.remove("error");
            formMessage.innerText = "";
          }, 2000);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="mail"
        />
        <label>Objet</label>
        <input type="text" name="object" required autoComplete="off" />
        <label>Message</label>
        <textarea name="message" required autoComplete="off" id="mess" />
        <input type="submit" value="Send" className="hover button" />
      </form>
      <div className="form-message">
        <p></p>
      </div>
    </div>
  );
};

export default ContactForm;
