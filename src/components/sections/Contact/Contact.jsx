import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import ContactMe from "../../images/ContactMe.png";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_15gh2we",
        "template_dld5dee",
        form.current,
        "-TuHutuXNZ6FlZchn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="Contact">
      <h5>Let's work together!</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <img src={ContactMe} alt="Me" />
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Get In Touch</h4>
            <h5>alexisiquintuna@gmail.com</h5>
            <a href="mailto:alexisiquintuna@gmail.com" target="_blank" className="contact__link" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
