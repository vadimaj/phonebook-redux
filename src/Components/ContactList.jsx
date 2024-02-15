/* eslint-disable react/prop-types */
import ContactListItem from './ContactListItem';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <section className="font-normal border-2 border-slate-500 rounded-md py-5 w-1/2 mx-auto">
      <ul className="text-left text-base text-slate-700 px-4">
        {contacts.map((contact) => (
          <ContactListItem
            contact={contact}
            onDeleteContact={onDeleteContact}
            key={contact.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
