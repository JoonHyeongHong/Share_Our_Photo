import { useFormik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import Input from './atoms/Input';
import Button from './Button';

const SignUpForm = () => {
  const validate = (values) => {
    const errors = {};
    const emailRegex = RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$', 'i');

    if (!values.email) {
      errors.email = 'Required';
    } else if (!emailRegex.test(values.email)) {
      errors.email = '유효한 이메일 형식이 아닙니다.';
    }

    if (values.password.length < 8 || values.password.length > 32) {
      errors.password = '8자 이상 32자 이하';
    }

    if (values.password !== values.passwordCheck) {
      errors.passwordCheck = '비밀번호가 일치하지 않습니다.';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordCheck: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
        errors={formik.errors.email}
      />
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        errors={formik.errors.password}
      />
      <Input
        id="passwordCheck"
        name="passwordCheck"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.passwordCheck}
        errors={formik.errors.passwordCheck}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default SignUpForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
