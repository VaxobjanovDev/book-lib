import {Field, Form, Formik,} from 'formik';
import {Box, Button, Container, TextField, Typography} from '@mui/material';
import {useContext} from "react";
import {AuthContext} from "../../store/auth-context";

export const LoginModule = () => {
  const {login} = useContext(AuthContext)

  const onSubmit = async (values: {}) => {
    await login(values)
  }

  const initialValues = {
    name: "Ali",
    email: 'testali@gmail.com',
    key: 'password',
    secret: 'secretPassword'
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
            </Form>
          </Formik>
        </Container>
      </Box>
    </>
  );
};
