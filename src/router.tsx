import { createBrowserRouter } from 'react-router-dom';
import App from './app';


import Home from '@/views/home';

const router = createBrowserRouter([
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
