import React, { useRef } from "react";
import classes from "./Contact.module.css";
import { Container } from "react-bootstrap";
const Contact = (props) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  async function submitHandler(e) {
    e.preventDefault();

    const contactdata = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    const response = await fetch(
      "https://react-api-1b936-default-rtdb.firebaseio.com/contactinfo.json",
      {
        method: "POST",
        body: JSON.stringify(contactdata),
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data)
    alert('data saved successfully')
  }
  return (
    <Container className="mb-3">
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>Name</label>
          <input type="text" ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label>Email id</label>
          <input type="email" ref={emailRef}></input>
        </div>
        <div className={classes.control}>
          <label>Phone No</label>
          <input type="number" ref={phoneRef} />
        </div>
        <button className={classes.button}>Add Movie</button>
      </form>
    </Container>
  );
};
export default Contact;
