import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './GlobalStyles';
import router from './router';
import theme from './theme';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeModeHandler = () => {
    setIsDarkMode((current) => !current);
  };
  return (
    <ThemeProvider theme={isDarkMode ? theme.darkTheme : theme.lightTheme}>
      <GlobalStyle />
      <Header isDarkMode={isDarkMode} changeMode={changeModeHandler} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
