import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Recuperar from '../../pages/Recuperar/Recuperar';
import Actualizar from '../../pages/Actualizar/Actualizar';
import {  ThemeProvider } from '@mui/material/styles';
import theme from '../../pages/Colores/Colores'; 

export default function Olvido() {
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
 
      <Button onClick={handleClickOpen}><LockOutlinedIcon />Olvidaste tu contraseña</Button>
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
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
              Olvidaste tu contraseña
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
                  helperText="Enviaremos un código de recuperación a este correo"
                />
 
                <Recuperar /> 
  
              </Box>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
             <Box component="form" 
                    sx={{ '& > :not(style)': { m: 1, width: '45ch' }, }}   noValidate autoComplete="off">
                    <TextField id="Codigo" label="Código de Recuperación" variant="outlined" />
            </Box>

            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Nueva Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
            />

            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Repetir Nueva Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <Actualizar />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              href="/login"
              sx={{ mt: 3, mb: 2 }}
            >
             Actualizar contraseña sin mensaje
            </Button>
 
          </Box>
            </Box>
          </Container>
        </ThemeProvider>
        </DialogContent>
        <DialogActions>
          <Button 
          onClick={handleClose} >Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
