import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Menu = (props) => {
  return (
    <MenuDiv {...props}>
      <ul>
        <Link to="/gallery">갤러리</Link>
        <Link to="/edit">사진 등록</Link>
        <Link to="/group">그룹 관리</Link>
        <Link tp="/mypage">마이페이지</Link>
      </ul>
    </MenuDiv>
  );
};

export default Menu;

const MenuDiv = styled.div`
  padding: 80px;
  padding-top: 200px;
  margin-right: auto;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: ${(props) => (props.visible ? 500 : 0)};
  background-color: ${(props) => props.theme.menuColor};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  -webkit-transition: width 2s ease-in-out;
  -webkit-transition: opacity 2s ease-in-out;

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
