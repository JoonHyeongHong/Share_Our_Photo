import React from 'react';
import styled from 'styled-components';
const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  height: 100%;
  margin: 0 5px;
  padding: 3px;
`;
