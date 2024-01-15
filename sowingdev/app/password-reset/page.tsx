'use client';
import * as React from 'react';
import Image from 'next/image';
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SowingDevLogo from '../img/sowingDevWhite.png';
import Copyright from '../components/Copyright';

const defaultTheme = createTheme({
  typography: {
    body1: {
      fontSize: '12px',
    },
  },
});
export default function PasswordReset() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Do something with data
  };

  const CardStyle: React.CSSProperties = {
    width: '600px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    boxShadow:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
  };

  const ButtonStyle: React.CSSProperties = {
    backgroundColor: 'rgb(233 30 30)',
  };
  const ImageStyle: React.CSSProperties = {
    marginTop: '30px',
    marginRight: '20px',
    borderRadius: '8px',
  };

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
                style={ImageStyle}
                src={SowingDevLogo}
                width={200}
                height={100}
                alt="Sowing Dev Logo"
              />
              <br />
              <Typography variant="body2">
                Please Enter your SowingDev associated Email:
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
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
                  style={ButtonStyle}
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
