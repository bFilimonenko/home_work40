import "./ContactsList.css";
import { Delete, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const ContactsList = ({ contacts, setContacts }) => {

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  return (
    <>
      <div className="contacts-table">
        <div className="header-container">
          <p className="first-name">FIRST NAME</p>
          <p className="last-name">LAST NAME</p>
          <p className="phone">PHONE</p>
          <p className="actions">ACTIONS</p>
        </div>

        {contacts.map(contact => (<div key={contact.id} className="contact table-row">
          <p className="first-name">{contact.name.split(" ")[0]}</p>
          <p className="last-name">{contact.name.split(" ")[1]}</p>
          <p className="phone">{contact.phone}</p>

          <p className="actions">
            <IconButton color="info">
              <Edit/>
            </IconButton>

            <IconButton color="error" onClick={() => deleteContact(contact.id)}>
              <Delete/>
            </IconButton>
          </p>
        </div>))}
      </div>
    </>
  );
};