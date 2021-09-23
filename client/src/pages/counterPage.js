import { Counter } from '../features/counter/Counter';
import { DefaultLayout } from '../layouts/defaultLayout';

export function CounterPage(props) {
    return (
        <DefaultLayout headerTitle="Counter" >
            <Counter />
        </DefaultLayout>
    )
}