import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuIcon } from './atoms/Icons';

const Drawer = (props) => {
  return (
    <>
      <LogoDiv onClick={props.onClick}>
        <MenuIcon size={20} />
      </LogoDiv>
      {props.visible && (
        <DrawerDiv {...props}>
          <ul>
            <Link to="/gallery">갤러리</Link>
            <Link to="/edit">사진 등록</Link>
            <Link to="/group">그룹 관리</Link>
            <Link tp="/mypage">마이페이지</Link>
          </ul>
        </DrawerDiv>
      )}
    </>
  );
};

export default Drawer;

const DrawerDiv = styled.div`
  padding: 80px;
  margin-right: auto;
  width: 300px;
  height: 100vh;
  margin: 0px;
  top: 0px;
  left: 0px;
  z-index: 1;
  position: absolute;
  background-color: ${(props) => props.theme.menuColor};
  -webkit-transition: width 2s ease-in-out;
  transition: width 2s ease-in-out;
  transition-delay: 0s;

  ul {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  ul > a {
    text-decoration: none;
    color: white;
  }
`;

const LogoDiv = styled.div`
  width: 10%;
  margin-left: 0;
  text-align: center;
`;
