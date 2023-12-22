'use client';
import * as React from 'react';
import Image from 'next/image';
import { Button, CssBaseline, TextField, Link, Box, Typography, Card, CardContent } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SowingDevWord from '../img/SowingDevWord.png';
import Copyright from '../components/Copyright';

const defaultTheme = createTheme();
export default function PasswordReset() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with data
    // const data = new FormData(event.currentTarget); data.get('email')
  };

  const CardStyle = {
    width: '600px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
  }

  return (
    <ThemeProvider theme={defaultTheme}>
    <div className="main">
      <Card sx={CardStyle}>
        <CardContent>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              style={{ marginTop: '30px', marginRight: '20px', borderRadius: '8px' }}
              src={SowingDevWord}
              width={200}
              height={100}
              alt="Sowing Dev Logo"
            />
            <br />
            <Typography component="h1" variant="h5">
              Please Enter your SowingDev associated Email:
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                style={{ backgroundColor: 'rgb(233 30 30)' }}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset Password
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </CardContent>
      </Card>
    </div>
    </ThemeProvider>
  );
}