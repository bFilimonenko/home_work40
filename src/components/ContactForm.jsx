import "./ContactForm.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [phone, setPhone] = useState("");

  const namePattern = /^[A-Za-zА-Яа-яЁёІіЇїЄє]{0,15}$/;

  const handleChangeFirstName = (event) => {
    if (namePattern.test(event.target.value)) {
      setFirstName(event.target.value);
    }
  };
  const handleChangeLastName = (event) => {
    if (namePattern.test(event.target.value)) {
      setLastName(event.target.value);
    }
  };


  return (
    <>
      <form className="contact-form">
        <TextField label="First Name" variant="filled" value={firstName}
                   onChange={handleChangeFirstName}/>
        <TextField label="Last Name" variant="filled" value={lastName}
                   onChange={handleChangeLastName}/>
        <TextField label="Phone" variant="filled"/>

        <div className="form-control">
          <Button variant="contained" color="primary">Cancel</Button>
          <Button variant="contained" color="success">Save</Button>
        </div>
      </form>
    </>
  );
};