import { Users } from '../features/users/Users';
import { InsertBulkUsers } from '../features/users/InsertBulkUsers';

export function UsersPage(props) {
    return (
        <>
            <Users />
            <InsertBulkUsers />
        </>
    )
}