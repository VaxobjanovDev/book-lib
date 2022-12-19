import * as Yup from 'yup';
import {Field, Form, Formik,} from 'formik';
import {Box, Button, Container, TextField, Typography} from '@mui/material';
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../store/auth-context";


export const LoginModule = () => {

  const initialValues = {
    name: "Ali",
    email: 'testali@gmail.com',
    key: 'password',
    secret: 'secretPassword'
  }

  let validationSchema= Yup.object({
    email: Yup
      .string()
      .email(
        'Must be a valid email')
      .max(255)
      .required(
        'Email is required'),
    password: Yup
      .string()
      .max(255)
      .required(
        'Password is required')
  })
  const {login} = useContext(AuthContext)

  const onSubmit = async (values: {}) => {
    await login(values)
  }

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          height: "98vh"
        }}
      >
        <Container maxWidth="sm">
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
              <Box sx={{my: 3}}>
                <Typography
                  color="textPrimary"
                  variant="h4"
                >
                  Sign Up
                </Typography>
              </Box>
              <Field as={TextField} name={"name"} placeholder={"Jackson"} label={"Name"} fullWidth
                     style={{margin: "10px 0"}}/>
              <Field as={TextField} name={"email"} placeholder={"Jackson"} label={"Email"} fullWidth
                     style={{margin: "10px 0"}}/>
              <Field as={TextField} name={"key"} placeholder={"Jackson"} label={"Key"} fullWidth
                     style={{margin: "10px 0"}}/>
              <Field as={TextField} name={"secret"} placeholder={"Jackson"} label={"Secret"} fullWidth
                     style={{margin: "10px 0"}}/>
              <Box sx={{py: 2}}>
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign In Now
                </Button>
              </Box>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                Don&apos;t have an account?
                {' '}
                <NavLink
                  to="/register"
                >
                  Sign Up
                </NavLink>
              </Typography>
            </Form>
          </Formik>
        </Container>
      </Box>
    </>
  );
};
