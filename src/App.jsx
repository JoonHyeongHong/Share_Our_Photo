import React, { useState } from 'react';
import { Outlet, RouterProvider } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
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
      <Container>
        <RouterProvider router={router}>
          <Header isDarkMode={isDarkMode} changeMode={changeModeHandler} />
          <Outlet />
        </RouterProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  transition: all 0.25s ease;
`;
