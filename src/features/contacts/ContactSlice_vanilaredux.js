const initialStateContact = {
  contacts: [],
  filter: '',
};
export default function contactReducer(state = initialStateContact, action) {
  switch (action.type) {
    case 'contact/addContact':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'contact/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case 'contact/filterChange':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export function addContact(contact) {
  return {
    type: 'contact/addContact',
    payload: contact,
  };
}

export function deleteContact(id) {
  return {
    type: 'contact/deleteContact',
    payload: id,
  };
}
export function filterChange(filterInput) {
  return {
    type: 'contact/filterChange',
    payload: filterInput,
  };
}
