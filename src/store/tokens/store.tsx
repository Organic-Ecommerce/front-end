import { createStore } from 'redux';
import { userReducer } from './tokensReducer';

const store = createStore(userReducer);

export default store;