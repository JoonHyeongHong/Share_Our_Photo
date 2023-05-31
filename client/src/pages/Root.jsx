import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Menu from '../components/Menu';

const Root = () => {
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
  const changeVisibleMenu = () => {
    setIsMenuVisible((current) => !current);
  };

  return (
    <RootContainer>
      <Menu visible={isMenuVisible} />
      <Header onMenuClick={changeVisibleMenu} />
      <Outlet />
    </RootContainer>
  );
};

export default Root;

const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
