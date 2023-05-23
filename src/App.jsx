import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, RouterProvider } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyle from './GlobalStyles';
import router from './router';
import theme from './theme';

function App() {
  const isDarkMode = useSelector((state) => state.theme.value);
  return (
    <ThemeProvider theme={isDarkMode ? theme.darkTheme : theme.lightTheme}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={router}>
          <Header />
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
