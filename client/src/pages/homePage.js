import { Link } from 'react-router-dom';
import { DefaultLayout } from '../layouts/defaultLayout';

export function HomePage(props) {
    return (
        <DefaultLayout headerTitle="Home">
            <h1>Home</h1>
            <ul>
                <li><Link to="/chat/6152a2d9865805464362b1cb">Chat</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/counter">Counter</Link></li>
            </ul>
        </DefaultLayout>
    )
}