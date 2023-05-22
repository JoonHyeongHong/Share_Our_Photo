import { Switch } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import NightIcon from './NightIcon';
import DayIcon from './DayIcon';
const Header = ({ isDarkMode, changeMode }) => {
  const size = 40;
  return (
    <Container>
      <ThemeSwitchDiv>
        <DayIcon size={size} />
        <Switch value={isDarkMode} onChange={changeMode} />
        <NightIcon size={size} />
      </ThemeSwitchDiv>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  transition: all 0.25s ease;
  max-height: 100vh;
  width: 100%;
  text-align: center;
  padding-top: 10rem;
`;

const ThemeSwitchDiv = styled.div`
  width: 100%;
  height: 60px;
  padding: 5px 0 5px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
