import React from 'react';
import styled from 'styled-components';

const Logo = (props) => {
  return (
    <LogoDiv {...props}>
      <h2>{props.children}</h2>
    </LogoDiv>
  );
};

export default Logo;

const LogoDiv = styled.div`
  width: 20%;
  margin-right: auto;
  font-size: 14px;
`;
