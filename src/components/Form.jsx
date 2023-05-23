import { Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';

const Form = (props) => {
  return (
    <StyledForm
      visible={props.visible}
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
    >
      <input type="text" />
      <input type="password" />
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled(Formik)`
  width: 100vw;
  height: 100vh;
  background-color: 'black';
  opacity: calc(0.5);
`;
