import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { logInPasskey } from '../actions/userActions';

const theme = createTheme();

const Login = () => {
  const dispatch = useDispatch();
  const msg = useSelector(state => state.msg);
  const [value, setValue] = useState('value');
  const [validate, setValidate] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) {
      setValidate(false);
    } else {
      dispatch(logInPasskey(value.toUpperCase()));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {(msg || !validate)
              ?
              < TextField
                onChange={(e) => setValue(e.target.value.trim())}
                error
                fullWidth
                margin="normal"
                helperText={msg + " not found"}
                name="passkey"
                id="passkey"
                label="Passkey"
              />
              :
              <TextField
                onChange={(e) => setValue(e.target.value.trim())}
                margin="normal"
                required
                fullWidth
                id="passkey"
                label="Passkey"
                name="passkey"
                autoComplete="passkey"
                autoFocus />
            }
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Login;