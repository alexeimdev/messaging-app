import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Layout } from './layout/layout';
import { UsersPage } from './pages/usersPage';
import { CounterPage } from './pages/counterPage';
import { HomePage } from './pages/homePage';

function App() {
    return (
        <Router>
            <Switch>
                <Layout>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/users">
                        <UsersPage />
                    </Route>
                    <Route path="/counter">
                        <CounterPage />
                    </Route>
                </Layout>
            </Switch>
        </Router>
    );
}

export default App;
