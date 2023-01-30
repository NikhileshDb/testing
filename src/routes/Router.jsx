import { createBrowserRouter } from 'react-router-dom'
import ErrorScreen from '../components/ErrorScreen';
import SplitScreen from '../layout/SplitScreen'
import Clients from '../pages/clients/Clients';
import Orders from '../pages/orders/Orders';
import Restaurants from '../pages/restaurents/Restaurants';
import Riders from '../pages/riders/Riders';

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <SplitScreen />,
        errorElement: <ErrorScreen />,
        children: [
            {
                path: 'main/users/clients',
                element: <Clients />,
            },
            {
                path: 'main/users/riders',
                element: <Riders />,
            },
            {
                path: 'main/users/restaurants',
                element: <Restaurants />
            },
            {
                path: 'main/users/orders',
                element: <Orders />
            }
        ]
    }
])