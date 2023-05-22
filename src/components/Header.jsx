import { Switch } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import NightIcon from './NightIcon';
import DayIcon from './DayIcon';
const Header = ({ theme, isDarkMode, changeMode }) => {
  return (
    <Container theme={theme}>
      <DayIcon size={24} theme={theme} />
      <Switch value={isDarkMode} onChange={changeMode} />
      <NightIcon size={24} theme={theme} />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  transition: all 0.25s ease;
  min-height: 10vh;
  text-align: center;
  padding-top: 10rem;
`;
