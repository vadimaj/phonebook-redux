import { createStore } from 'redux';
import contactReducer from '../features/contacts/ContactSlice';

const store = createStore(contactReducer);

export default store;
