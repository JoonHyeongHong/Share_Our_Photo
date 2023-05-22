import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainPage, LoginPage, SignUpPage } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'signUp',
    element: <SignUpPage />,
  },
]);

export default router;
