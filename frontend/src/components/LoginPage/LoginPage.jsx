import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useUser } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });
  const { context, setContext } = useUser();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/v1/login', values);
        window.localStorage.setItem('token', response.data.token);
        setContext({ token: response.data.token, username: response.data.username });
        console.log('localStorage.token', localStorage.token);
        navigate('/');
      } catch (error) {
        console.error(error);
      }
    }
  });
  return (
    <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
      <div className='container w-25 rounded shadow p-4'>
        <Form onSubmit={formik.handleSubmit}>
          <Form className="mb-3">
            <Form.Label className='fs-1 mb-3'>Войти</Form.Label>
            <Form.Control name="username"
              autoComplete="username"
              placeholder="Ваш ник"
              id="username"
              required
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text" />
          </Form>
          <Form className="mb-3">
            <Form.Control
              name="password"
              autoComplete="current-password"
              placeholder="Пароль"
              id="password"
              required
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password" />
          </Form>
          <Button variant="outline-primary" className='w-100' type="submit">
            Войти
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
