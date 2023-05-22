import { Switch } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <Container theme={props.isDarkMode ? 'darkTheme' : 'lightTheme'}>
      <P>낮</P>
      <Switch label={'낮밤'} onChange={props.onChange} />
      <P>밤</P>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  transition: all 0.25s ease;
  min-height: 10vh;
  background-color: skyblue;
  text-align: center;
  padding-top: 10rem;
`;

const P = styled.p`
  color: ${(props) => props.theme.textColor};
`;
