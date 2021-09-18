import React from 'react';
import { Counter } from './features/counter/Counter';
import { Users } from './features/users/Users';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Counter />
      <Users />
    </Router>
  );
}

export default App;
