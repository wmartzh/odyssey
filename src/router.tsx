import { createBrowserRouter } from 'react-router-dom';
import App from './app';

import Home from '@/views/home/home';
import Login from './views/login/login';
import Register from './views/register/register';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
]);

export default router;
