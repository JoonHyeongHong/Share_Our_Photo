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
`;
