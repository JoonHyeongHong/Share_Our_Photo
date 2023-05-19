import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Counter } from './counter';
import MainPage from './pages/MainPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: 'counter',
    element: <Counter />,
  },
]);
export default router;
