/* eslint-disable react/prop-types */
const ContactListItem = ({ contact, onDeleteContact }) => {
  console.log(contact);

  return (
    <div className="flex items-center gap-3">
      <p>
        &bull; {contact.name}: {contact.number}
      </p>
      <button
        type="button"
        onClick={() => onDeleteContact(contact.id)}
        className="text-white bg-red-500 rounded-md text-sm w-16 font-semibold"
      >
        Delete &times;
      </button>
    </div>
  );
};

export default ContactListItem;
