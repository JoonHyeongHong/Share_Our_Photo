import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LoginPage, SignUpPage, Root, MainPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'signUp',
        element: <SignUpPage />,
      },
      {
        path: 'gallery',
        element: <div>갤러리</div>,
      },
    ],
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
]);

export default router;
