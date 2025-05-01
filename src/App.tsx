import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { CardDetail } from './pages/car';
import { Dashboard } from './pages/dashboard';
import { NewCar } from './pages/dashboard/newCar';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Layout } from './components/layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/car/:id',
        element: <CardDetail />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/dashboard/new',
        element: <NewCar />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
