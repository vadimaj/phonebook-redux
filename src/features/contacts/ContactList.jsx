/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';

import ContactListItem from './ContactListItem';

const ContactList = () => {
  const contacts = useSelector((store) => store.contacts);
  const filter = useSelector((store) => store.filter);

  function getFilteredContacts() {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <section className="font-normal border-2 border-slate-500 rounded-md py-5 w-1/2 mx-auto">
      <ul className="text-left text-base text-slate-700 px-4">
        {getFilteredContacts().map((contact) => (
          <ContactListItem contact={contact} key={contact.id} />
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
