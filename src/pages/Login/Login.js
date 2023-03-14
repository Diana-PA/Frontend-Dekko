import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {  ThemeProvider } from '@mui/material/styles';
import theme from '../../pages/Colores/Colores';
  
import AccountCircle from '@mui/icons-material/AccountCircle';  
import Olvido from '../../pages/Olvido/Olvido';
import Registro from '../../pages/Registro/Registro';
import { teal } from '@mui/material/colors';
export default function Login() {
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

     <Button onClick={handleClickOpen} sx={{ color: teal[500] }}><AccountCircle sx={{ color: teal[500] }}/>Ingresa a tu cuenta</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 12,
                marginBottom: 12,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <AccountCircle />
              </Avatar>
              <Typography component="h1" variant="h5">
                Ingresa a tu cuenta
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Recordar la contraseña"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                 Ingresa a tu cuenta
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Olvido />  
                  </Grid>
                  <Grid item>
                     <Registro />  
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
        </DialogContent>
     
        <DialogActions>
          <Button onClick={handleClose} >Cancelar</Button>
        </DialogActions>
        
      </Dialog>
    </div>
  );
}
