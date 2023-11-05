import './App.css';

import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import router from './routes/router';
import { useEffect } from 'react';
import { setDefaultDishes } from './slices/menuListSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDefaultDishes());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
