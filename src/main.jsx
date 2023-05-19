import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import { Counter } from './counter';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: 'counter',
    element: <Counter />,
  },
]);
export default router;
