import { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactFilter from './Components/ContactFilter';
import ContactForm from './Components/ContactForm';
import ContactListItem from './Components/ContactListItem';
import ContactList from './Components/ContactList';

const testContacts = [
  { id: 'id-1', name: 'Popcorn', number: '459-12-56' },
  { id: 'id-2', name: 'Mario', number: '443-89-12' },
  { id: 'id-3', name: 'Minecraft', number: '645-17-79' },
  { id: 'id-4', name: 'Zombie', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleAddContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };
  const handleDeleteContact = (id) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div className="text-center max-w-full text-2xl font-bold text-slate-800 py-4 px-3">
      <h1 className="mb-5">Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />

      <h2 className="mb-5">Contacts</h2>
      {/* <ContactFilter /> */}
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;
