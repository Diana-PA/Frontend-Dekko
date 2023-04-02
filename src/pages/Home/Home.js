import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/joy/Typography';
import Carrusel from './carrusel';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={10}>
          <Item>
            <Carrusel />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <br />
            <Typography color="black"  fontSize="12" sx={{ mb: 0.5 }} fontFamily='-apple-system' level="h1">Dekko</Typography>
            <br />
            <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
              Papeles murales hechos a medida
            </Typography>
            <br />
            <Typography level="body1">
              Tenemos una amplia variedad
            </Typography>
            <Typography level="body1">
              de estilos y diseños, 
            </Typography>
            <Typography level="body1">
              pensados en aportar 
            </Typography>
            <Typography level="body1">
              calidez y estilo a tus espacios.
            </Typography>
            <br />
            <Typography level="body2">
              Visítanos en nuestro Show Room
            </Typography>
            <Typography level="body2">
              Isabel la Católica 7350
            </Typography>
            <Typography level="body2">
              Las Condes
            </Typography>
            <br />
            <Typography level="body3">
              Lunes a Jueves de 9:30 a 18:00 hrs.
            </Typography>
            <Typography level="body3">
              Viernes hasta las 16:00 hrs.
            </Typography>
            <br />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}