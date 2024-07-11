import { createStore } from 'redux';
import { nanoid } from 'nanoid';
const initialStateContact = {
  contacts: [],
  filter: '',
};
function contactReducer(state = initialStateContact, action) {
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
const store = createStore(contactReducer);

function addContact(name, number) {
  return {
    type: 'contact/addContact',
    payload: { name, number, id: nanoid() },
  };
}

function deleteContact(id) {
  return {
    type: 'contact/deleteContact',
    payload: id,
  };
}
function filterChange(filterInput) {
  return {
    type: 'contact/filterChange',
    payload: filterInput,
  };
}

store.dispatch(addContact('vadym', '123456'));
store.dispatch(addContact('mario', '223322'));
store.dispatch(addContact('terminator', '777'));
store.dispatch(deleteContact('grlLyuUFVdKM14-fHslW8'));
store.dispatch(filterChange('nbl'));
console.log(store.getState());
