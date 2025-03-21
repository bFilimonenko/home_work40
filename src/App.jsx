import "./App.css";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Contacts, PersonAddAlt1 } from "@mui/icons-material";
import { ContactsList } from "./components/ContactsList.jsx";
import { ContactForm } from "./components/ContactForm.jsx";

const PAGES = {
  LIST: "Contacts list",
  ADD: "Add contact"
};

function App() {
  const [contacts, setContacts] = useState([]);
  const [routing, setRouting] = useState(PAGES.LIST);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setContacts(data))
  }, []);

  return (
    <>
      <Button variant="outlined" startIcon={<Contacts/>} onClick={() => setRouting(PAGES.LIST)}>
        Contacts List
      </Button>
      <Button variant="outlined" endIcon={<PersonAddAlt1/>} onClick={() => setRouting(PAGES.ADD)}>
        Add Contact
      </Button>

      {routing === PAGES.LIST && <ContactsList contacts={contacts}/>}
      {routing === PAGES.ADD && <ContactForm/>}

    </>
  );
}

export default App;
