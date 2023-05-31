import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  SignUpPage,
  Root,
  MainPage,
  MyPage,
  GroupPage,
  EditPage,
} from './pages';

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
      {
        path: 'group',
        element: <GroupPage />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
      {
        path: 'edit',
        element: <EditPage />,
      },
    ],
  },
]);

export default router;
