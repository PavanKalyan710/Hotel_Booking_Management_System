import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import axios from "axios";

function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const handleOnChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(
        `https://voyawander-json-szvk.onrender.com/contact`,
        formData
      )
      .then((res) => {
        alert("Message added!");
        setIsLoading(false);
      })
      .catch((er) => {
        alert("Some error occurred!");
        setIsLoading(false);
      });
  };

  return (
    <div className={`${styles.third_section} ${styles.fifth_section}`}>
      {isLoading && (
        <div className={styles.loadingscreen}>
          <img
            src={
              "https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif"
            }
            alt="Loading Animation"
          />
        </div>
      )}
      <h1>Get in touch</h1>
      <p>
        Don't wait – contact us now to plan your next hotel escape. Our
        dedicated team is here to answer your questions and turn your travel
        dreams into a luxurious reality.
      </p>
      <div className={styles.contact_form}>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={handleOnChange}
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={handleOnChange}
              name="phone"
              type="tel" // Corrected type
              placeholder="Mobile"
            />
          </div>
          <input
            onChange={handleOnChange}
            name="message"
            type="text"
            placeholder="Message"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
