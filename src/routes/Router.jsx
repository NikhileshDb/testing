import { createBrowserRouter } from 'react-router-dom'
import ErrorScreen from '../pages/ErrorScreen';
import SplitScreen from '../layout/SplitScreen'
import { Clients, loader as clientsLoader } from '../pages/clients/Clients';
import Jobs from '../pages/jobs/Jobs';
import { Orders, loader as ordersLoader } from '../pages/orders/Orders';
import Restaurants from '../pages/restaurents/Restaurants';
import { Riders, loader as ridersLoader } from '../pages/riders/Riders';
import Services from '../pages/services/Services';

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <SplitScreen />,
        errorElement: <ErrorScreen />,
        children: [
            {
                path: 'main/users/clients',
                element: <Clients />,
                loader: clientsLoader,
            },
            {
                path: 'main/users/riders',
                element: <Riders />,
                loader: ridersLoader,
            },
            {
                path: 'main/users/restaurants',
                element: <Restaurants />
            },
            {
                path: 'main/users/orders',
                element: <Orders />,
                loader: ordersLoader,
            },
            {
                path: 'main/app/services',
                element: <Services />
            },
            {
                path: 'main/app/jobs',
                element: <Jobs />
            }

        ]
    }
])