import React from 'react';
import styled from 'styled-components';
import SignUpForm from '../components/SignUpForm';

const SignUpPage = () => {
  return (
    <PageDiv>
      <SignUpForm />
    </PageDiv>
  );
};

export default SignUpPage;

const PageDiv = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
