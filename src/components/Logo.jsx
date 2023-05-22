import React from 'react';
import styled from 'styled-components';

const Logo = (props) => {
  return (
    <LogoDiv {...props}>
      <h1>{props.children}</h1>
    </LogoDiv>
  );
};

export default Logo;

const LogoDiv = styled.div``;
