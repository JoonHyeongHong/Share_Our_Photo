import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import router from './router';
import theme from './theme';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeModeHandler = (event) => {
    event.preventDefault();
    setIsDarkMode((current) => !current);
  };
  return (
    <ThemeProvider theme={isDarkMode ? theme.darkTheme : theme.lightTheme}>
      <Header isDarkMode={isDarkMode} onChange={changeModeHandler} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
