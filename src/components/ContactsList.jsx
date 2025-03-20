export const ContactsList = ({ contacts }) => {
  return (
    <>
      {contacts.map(contact => (<div key={contact.id}>
        <p>{contact.name}</p>
        <p>{contact.phone}</p>
      </div>))}
    </>
  );
};