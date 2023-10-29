import './App.css';

import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import router from './routes/router';
import { useEffect } from 'react';
import axios from 'axios';
import { setMenuList } from './slices/menuListSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getList = async () => {
      const result = await axios.get('http://localhost:4000');
      console.log(result.data);

      dispatch(setMenuList(result.data));
    };
    getList();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
