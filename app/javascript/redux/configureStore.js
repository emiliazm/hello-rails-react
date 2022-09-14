import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducerGreetings } from './greetings/greetings';

const store = configureStore({
  reducer: {
    greetings: reducerGreetings,
  },
  middleware: [thunk, logger],
});

export default store;
