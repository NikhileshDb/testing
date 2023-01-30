import { createBrowserRouter } from 'react-router-dom'
import ErrorScreen from '../components/ErrorScreen';
import SplitScreen from '../layout/SplitScreen'
import Clients from '../pages/clients/Clients';
import Jobs from '../pages/jobs/Jobs';
import Orders from '../pages/orders/Orders';
import Restaurants from '../pages/restaurents/Restaurants';
import Riders from '../pages/riders/Riders';
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