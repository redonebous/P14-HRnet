import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import CurrentEmployee from '../pages/CurrentEmployee';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/employees',
        element: <CurrentEmployee />
    }
])