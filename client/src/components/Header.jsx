import { Switch } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { MenuIcon, DayIcon, NightIcon } from './atoms/Icons';
import Logo from './Logo';
import Button from './Button';
import Form from './Form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../features/theme/themeSlice';

const size = 20;

const Header = () => {
  const isDarkMode = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const returnMainPage = () => {
    navigate('/');
  };

  return (
    <Container>
      <Form />
      <MenuDiv>
        <MenuIcon size={size} />
      </MenuDiv>
      <div />
      <Logo onClick={returnMainPage}>Share Our Photo</Logo>
      <RightSection>
        <ThemeSwitchDiv size={size}>
          <DayIcon size={size} />
          <Switch
            value={isDarkMode}
            onChange={() => dispatch(changeTheme())}
            color="default"
          />
          <NightIcon size={size} />
        </ThemeSwitchDiv>
        <LoginDiv>
          <Button>로그인</Button>
          <Link to="/signup">
            <Button>회원가입</Button>
          </Link>
        </LoginDiv>
      </RightSection>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  margin: 0 auto;
  padding: 0px;
  width: 100vw;
  max-width: 1080px;
  height: 80px;
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
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const RightSection = styled.div`
  width: 33%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
