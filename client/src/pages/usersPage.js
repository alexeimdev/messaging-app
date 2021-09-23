import { Users } from '../features/users/Users';
import { InsertBulkUsers } from '../features/users/InsertBulkUsers';
import { DefaultLayout } from '../layouts/defaultLayout';

export function UsersPage(props) {
    return (
        <DefaultLayout headerTitle="Users">
            <Users />
            <InsertBulkUsers />
        </DefaultLayout>
    )
}