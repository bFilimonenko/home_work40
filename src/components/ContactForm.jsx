import "./ContactForm.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useMask } from "@react-input/mask";

export const ContactForm = ({ contacts, setContacts }) => {
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    phone: ""
  });

  // const [formValidation, setFormValidation] = useState({
  //   firstName: false,
  //   lastName: false,
  //   phone: false,
  // })

  const namePattern = /^[A-ZА-ЯЁІЇЄ][A-Za-zА-Яа-яЁёІіЇїЄє]{0,15}$/;
  const phonePattern = useMask({
    mask: "+38(___)-___-__-__",
    replacement: { _: /\d/ }
  });

  const handleChange = (event) => {
    switch (event.target.name) {
      case "firstName":
        if (!namePattern.test(event.target.value)) break;
        setFormValue({ ...formValue, firstName: `${event.target.value}` });
        break;
      case "lastName":
        if (!namePattern.test(event.target.value)) break;
        setFormValue({ ...formValue, lastName: `${event.target.value}` });
        break;
      case "phone":
        setFormValue({ ...formValue, phone: `${event.target.value}` });
        break;
    }
  };

  const saveContact = () => {
    console.log(formValue);

    console.log("test");//todo: function for validation
    setContacts([
      ...contacts,
      {
        id: contacts.at(-1).id + 1,
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        phone: formValue.phone
      }]);
  };

  return (
    <>
      <form className="contact-form">
        <TextField label="First Name" variant="filled" name="firstName" value={formValue.firstName}
                   onChange={handleChange}/>
        <TextField label="Last Name" variant="filled" name="lastName" value={formValue.lastName}
                   onChange={handleChange}/>
        <TextField label="Phone" variant="filled" name="phone" value={formValue.phone}
                   onChange={handleChange} inputRef={phonePattern}/>

        <div className="form-control">
          <Button variant="contained" color="primary">Cancel</Button>
          <Button variant="contained" color="success" onClick={saveContact}>Save</Button>
        </div>
      </form>
    </>
  );
};