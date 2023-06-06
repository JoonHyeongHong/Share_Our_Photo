import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';

const Root = () => {
  return (
    <RootContainer>
      <Header />
      <Outlet />
    </RootContainer>
  );
};

export default Root;

const RootContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
