import { Link } from 'react-router-dom';

export function HomePage(props) {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/counter">Counter</Link></li>
            </ul>
        </div>
    )
}