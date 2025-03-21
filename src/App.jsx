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
    const contactsFromLocalStorage = localStorage.getItem("contacts");

    if (contactsFromLocalStorage) {
      setContacts(JSON.parse(contactsFromLocalStorage));
      localStorage.removeItem("contacts");
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setContacts(data));
    }

    return () => {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    };
  }, []);

  useEffect(() => {
    if (!contacts.length) return;

    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Button variant="outlined" startIcon={<Contacts/>} onClick={() => setRouting(PAGES.LIST)}>
        Contacts List
      </Button>
      <Button variant="outlined" endIcon={<PersonAddAlt1/>} onClick={() => setRouting(PAGES.ADD)}>
        Add Contact
      </Button>

      {routing === PAGES.LIST && <ContactsList contacts={contacts} setContacts={setContacts}/>}
      {routing === PAGES.ADD && <ContactForm/>}

    </>
  );
}

export default App;
