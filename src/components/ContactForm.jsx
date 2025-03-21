import "./ContactForm.css";
import { Button, TextField } from "@mui/material";

export const ContactForm = () => {
  return (
    <>
      <form className="contact-form">
        <TextField label="First Name" variant="filled"/>
        <TextField label="Last Name" variant="filled"/>
        <TextField label="Phone" variant="filled"/>
        <div className='form-control'>
          <Button variant="contained" color="primary">Cancel</Button>
          <Button variant="contained" color="success">Save</Button>
        </div>
      </form>
    </>
  );
};