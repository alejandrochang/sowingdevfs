'use client';

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Alert,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/Copyright';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const defaultTheme = createTheme({
  typography: {
    body1: {
      fontSize: '12px',
    },
  },
});

function SignUp() {
  const [error, setActiveError] = useState<boolean>(false);
  const [userExistsError, setUserExistsError] = useState<boolean>(false);
  const defaultFormState = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };
  const [formValues, setFormValues] = useState(defaultFormState);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, firstName, lastName } = formValues;

    try {
      const response = await fetch('api/userExists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await response.json();
      if (user) {
        setUserExistsError(true);
        return;
      }

      const res = await fetch('api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          name: `${firstName} ${lastName}`,
        }),
      });

      if (res.ok) {
        setFormValues(defaultFormState);
        router.push('/curriculum');
      } else {
        setActiveError(true);
      }
    } catch (error) {
      console.log('Error during registration. Please try again');
      setActiveError(true);
    }
  };

  const errorText = error
    ? 'User Registration Failed. Please try again!'
    : 'User account already exists!';
  const callbackError = error ? setActiveError : setUserExistsError;
  return (
    <div className="main">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box sx={BoxStyle}>
            {(error || userExistsError) && (
              <Alert
                onClose={() => callbackError(false)}
                severity="error"
                sx={AlertStyle}
              >
                {errorText}
              </Alert>
            )}
            <Avatar sx={{ m: 1, bgcolor: '#242631' }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={formValues.firstName}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        firstName: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={formValues.lastName}
                    onChange={(e) =>
                      setFormValues({ ...formValues, lastName: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formValues.email}
                    onChange={(e) =>
                      setFormValues({ ...formValues, email: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={formValues.password}
                    onChange={(e) =>
                      setFormValues({ ...formValues, password: e.target.value })
                    }
                  />
                </Grid>
              </Grid>
              <Button
                style={ButtonStyle}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}

const AlertStyle: React.CSSProperties = {
  width: '100%',
  alignItems: 'center',
  marginBottom: '20px',
};

const BoxStyle: React.CSSProperties = {
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const ButtonStyle: React.CSSProperties = { backgroundColor: '#6AA761' };

export default SignUp;
