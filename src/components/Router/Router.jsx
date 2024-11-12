import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout';
import Home from '../Home';
import Producat from '../Producat';
import Blog from '../Blog';
import Service from '../Service';
import Login from '../Login';
import Register from '../Register';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/producat',
        element: <Producat />,
      },
      {
        path: '/blog', // Fixed typo here
        element: <Blog />,
      },
      {
        path: '/service', // Fixed typo here
        element: <Service />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default Router;
