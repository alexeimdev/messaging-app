import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import { UsersPage } from './pages/usersPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/users">
          <UsersPage />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
