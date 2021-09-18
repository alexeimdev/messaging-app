import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { UsersPage } from './pages/usersPage';
import { CounterPage } from './pages/counterPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/users">
          <UsersPage />
        </Route>
        <Route path="/counter">
          <CounterPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
