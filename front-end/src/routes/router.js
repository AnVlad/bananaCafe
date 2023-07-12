import { Outlet, createBrowserRouter } from 'react-router-dom';

import Main from '../components/pages/Main';
import Menu from '../components/pages/Menu';
import Header from '../components/pages/main/Header';
import Footer from '../components/pages/Footer';
import Cart from '../components/pages/Cart';
import ErrorPage from '../components/pages/ErrorPage';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);

export default router;
