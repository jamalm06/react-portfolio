import React, { useState } from "react";
import { EmailValidation } from "../../utils/helpers";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [invalidEmail, setInvalidEmail] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputName === "name") {
      setName(inputValue);
    } else if (inputName === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleMessage = (e) => {
    const { target } = e;
    const inputValue = target.value;

    if (inputValue === " ") {
        alert('Please enter a message');
    } 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!EmailValidation(email)) {
        setMessage('Please enter a valid email address.');
            alert('Please enter a valid email address.');
        } 
        else {
            setMessage('');
            
        }

        alert(`Thank You ${name} for reaching out! I will get back to you soon!`);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div class ="centered-div">
      <form className="form">
        <h2>Contact Me</h2>
        <h3>Name:</h3>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
        ></input>
        <h3>Email:</h3>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
        ></input>
        <h3>Message:</h3>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onMouseOut={handleInputChange}
          type="text"
        ></textarea>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleFormSubmit}
        >
          Send
        </button>
        <p> {invalidEmail}</p>
      </form>
    </div>
  );
}

export default Contact;