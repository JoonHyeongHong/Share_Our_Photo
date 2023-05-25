import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  return (
    <InputDiv>
      <label htmlFor={props.name}>{props.name}</label>
      <input {...props} />
      <div>{props.errors ? props.errors : null}</div>
    </InputDiv>
  );
};

export default Input;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  input {
    height: 80%;
    border-radius: 4px;
  }

  div {
    color: red;
    font-size: 14px;
    font-weight: bold;
  }
`;
