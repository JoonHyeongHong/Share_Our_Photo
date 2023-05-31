import { Switch } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { MenuIcon, DayIcon, NightIcon } from './atoms/Icons';
import Logo from './Logo';
import { Button } from './atoms';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../features/theme/themeSlice';

const Header = (props) => {
  const size = 20;

  const isDarkMode = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const returnMainPage = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <LeftSection onClick={props.onMenuClick}>
        <MenuDiv>
          <MenuIcon size={20} />
        </MenuDiv>
      </LeftSection>
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
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  padding: 0px;
  z-index: 999;
  width: 100vw;
  max-width: 1080px;
  margin: 0 auto;
  height: 80px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid ${(props) => props.theme.textColor};
  div {
    color: ${(props) => props.theme.textColor};
  }
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

const LeftSection = styled.div`
  width: 33%;
  margin-left: 0;
  display: flex;
`;

const MenuDiv = styled.div`
  margin-right: 0;
  margin-left: 20%;
`;
