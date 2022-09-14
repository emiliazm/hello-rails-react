import React from 'react';
import {
  HashRouter as Router, Route, Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Greeting from './Greeting';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
