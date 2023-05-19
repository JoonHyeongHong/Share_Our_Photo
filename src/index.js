import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import router from './router';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
