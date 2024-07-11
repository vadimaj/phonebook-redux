import ContactFilter from './features/contacts/ContactFilter';
import ContactForm from './features/contacts/ContactForm';
import ContactList from './features/contacts/ContactList';

function App() {
  return (
    <div className="text-center max-w-full text-2xl font-bold text-slate-800 py-4 px-3">
      <h1 className="mb-5">Phonebook</h1>
      <ContactForm />
      <h2 className="mb-5">Contacts</h2>
      <ContactFilter />
      <ContactList />
    </div>
  );
}
export default App;
