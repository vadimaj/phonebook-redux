import { useEffect, useState } from 'react';
import ContactFilter from './Components/ContactFilter';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';

function App() {
  const [contacts, setContacts] = useState(function () {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(
    function () {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    },
    [contacts]
  );

  const handleAddContact = (newContact) => {
    const normalizedNewName = newContact.name.toLocaleLowerCase();
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === normalizedNewName
      )
    ) {
      return alert(`Contact ${newContact.name} already exist!`);
    }
    setContacts((prev) => [...prev, newContact]);
  };
  const handleDeleteContact = (id) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  };
  const handleFilterInputChange = (e) => {
    setFilter(e.target.value);
  };
  function getFilteredContacts() {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  return (
    <div className="text-center max-w-full text-2xl font-bold text-slate-800 py-4 px-3">
      <h1 className="mb-5">Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2 className="mb-5">Contacts</h2>
      <ContactFilter value={filter} onChange={handleFilterInputChange} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}
export default App;
