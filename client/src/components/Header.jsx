import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { DayIcon, NightIcon } from './atoms/Icons';
import { Button } from './atoms';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../features/theme/themeSlice';

const Header = () => {
  const size = 32;

  const isDarkMode = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const returnMainPage = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Logo onClick={returnMainPage}>Share Our Photo</Logo>

      <MiddleSection>
        <ul>
          <Link to="/gallery">갤러리</Link>
          <Link to="/edit">사진 등록</Link>
          <Link to="/group">그룹 관리</Link>
          <Link tp="/mypage">마이페이지</Link>
        </ul>
      </MiddleSection>
      <RightSection>
        <LoginDiv>
          <Button>로그인</Button>
          <Link to="/signup">
            <Button>회원가입</Button>
          </Link>
        </LoginDiv>
        <IconDiv size={size}>
          {isDarkMode && (
            <DayIcon size={size} onClick={() => dispatch(changeTheme())} />
          )}
          {!isDarkMode && (
            <NightIcon size={size} onClick={() => dispatch(changeTheme())} />
          )}
        </IconDiv>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  padding: 0px;
  z-index: 999;
  width: 100vw;
  background-color: ${(props) => props.theme.bgColor};
  margin: 0 auto;
  height: 60px;
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

const IconDiv = styled.div`
  width: 20%;
  height: 100%;
  padding: 5px 0 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LoginDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  button {
    font-weight: bold;
  }
`;

const RightSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

const MiddleSection = styled.div`
  width: 50%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;

  ul {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
`;
