import { Switch } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { MenuIcon, DayIcon, NightIcon } from './atoms/Icons';
import Logo from './Logo';
import Button from './Button';

const Header = ({ isDarkMode, changeMode }) => {
  const size = 20;
  return (
    <Container>
      <MenuDiv>
        <MenuIcon size={size} />
      </MenuDiv>
      <div></div>
      <Logo>Share Our Photo</Logo>
      <RightSection>
        <ThemeSwitchDiv size={size}>
          <DayIcon size={size} />
          <Switch value={isDarkMode} onChange={changeMode} color="default" />
          <NightIcon size={size} />
        </ThemeSwitchDiv>
        <LoginDiv>
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </LoginDiv>
      </RightSection>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  margin: 0px;
  padding: 0px;
  background-color: ${(props) => props.theme.bgColor};
  transition: all 0.25s ease;
  width: 100vw;
  height: 80px;
  color: ${(props) => props.theme.textColor};
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    color: ${(props) => props.theme.textColor};
  }
`;

const MenuDiv = styled.div`
  width: 10%;
  margin-left: 0;
  text-align: center;
`;

const ThemeSwitchDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 0 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LoginDiv = styled.div`
  width: 50%;
  height: 100%;
`;

const RightSection = styled.div`
  width: 33%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
