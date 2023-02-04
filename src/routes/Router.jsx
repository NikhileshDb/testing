import { createBrowserRouter } from 'react-router-dom'
import SplitScreen from '../layout/SplitScreen'


// pages
import ErrorScreen from '../pages/ErrorScreen';
import { Clients, loader as clientsLoader } from '../pages/clients/Clients';
import Jobs from '../pages/jobs/Jobs';
import { Orders, loader as ordersLoader } from '../pages/orders/Orders';
import Restaurants from '../pages/restaurents/Restaurants';
import { Riders, loader as ridersLoader } from '../pages/riders/Riders';
import Services from '../pages/services/Services';
import Index from '../pages/Index';
import { EditClient, loader as clientDetail } from '../pages/clients/EditClient';

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <SplitScreen />,
        errorElement: <ErrorScreen />,
        children: [

            { index: true, element: <Index /> },
            // Clients
            {
                path: 'main/users/clients',
                element: <Clients />,
                loader: clientsLoader,
            },
            {
                path: 'main/users/clients/:clientId/edit',
                element: <EditClient />,
                loader: clientDetail,

            },
            // Riders
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