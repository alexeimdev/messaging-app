import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { UsersPage } from './pages/usersPage';
import { CounterPage } from './pages/counterPage';
import { HomePage } from './pages/homePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
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
