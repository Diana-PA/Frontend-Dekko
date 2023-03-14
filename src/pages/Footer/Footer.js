import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
 import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Row from 'react-bootstrap/Row';
import webpay from '../../images/2.WebpayPlus_FN_800px.png';
import qr from '../../images/QR-VitrinaDeComercio.png';
import { teal } from '@mui/material/colors';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation'; 
const Footer = () => {
  let urlFacebook="https://www.facebook.com/search/top?q=katzmania";
  let urlInstagram="https://www.instagram.com/explore/tags/katzmaniaaa/";
  let urlWebpay="https://twitter.com/?lang=es";
  let urlDireccion="https://www.waze.com/es-419/live-map/directions/cl/region-metropolitana/las-condes/isabel-la-catolica-7350?to=place.ChIJr7nK4PPOYpYRgqMhlyxO1A8";
  let urlWhatsapp="https://api.whatsapp.com/send/?phone=56942350685&text&type=phone_number&app_absent=0";
  return (
    <footer>  
        <Box  sx={{ flexGrow: 1 , backgroundColor: '#0097a7', padding: 3}}> 
        <Grid container spacing={{ xs: 2, md: 3, lg: 5 }} 
              columns={{ xs: 2,sm: 2,md: 2, lg: 6 , xl: 6}} 
              display="flex" 
              justifyContent="center">

          <Grid item md={2}  >
          
                 <Typography level="body" sx={{ color: teal[50] }} ><LocationOnIcon   fontSize="large"  /> Isabel la Católica 7350, Las Condes</Typography> 
                <Link href={urlDireccion} underline="none" target="_blank" sx={{ color: teal[50]} } ><NotListedLocationIcon  fontSize="large" /> Como llegar</Link>
                <Typography level="body" sx={{ color: teal[50] }} ><EmailIcon  fontSize="large"  /> contacto@katzmania.cl </Typography>
                <Typography level="body" sx={{ color: teal[50] }} ><CallIcon   fontSize="large"  /> Telefonos: +569 3251 3550 +569 4235 0685 </Typography>
                <Typography level="body" sx={{ color: teal[50] }} ><AccessTimeIcon   fontSize="large"  /> Abierto de lunes a viernes 10:30 a 18:30</Typography> 
             
          </Grid> 
          <Grid item md={2}  >
                <Typography level="h6"> <Link sx={{ color: teal[50] }} underline="none" href="/nosotros" >Nosotros</Link></Typography>
                <Typography level="h6"> <Link sx={{ color: teal[50] }} underline="none" href="/garantias" >Garantias</Link> </Typography>
                <Typography level="h6"> <Link sx={{ color: teal[50] }} underline="none" href="/instructivo" >Instructivo</Link></Typography>
                <Typography level="h6"> <Link sx={{ color: teal[50] }} underline="none" href="/contacto" >Contacto</Link></Typography>
          </Grid> 
          <Grid item md={2}  > 
          <Row>
            <p className="mt-2"><img src={qr} width="110" height="110" className="d-inline-block" alt="LogoQr"/></p>
          </Row>
          <Row className="mb-3">
            <Link href={urlWebpay} target="_blank"><img height={50} alt="webpat" src={webpay} /> </Link>
          </Row>
              <Link href={urlFacebook} target="_blank"><FacebookIcon sx={{ color: teal[50] }}   fontSize="large"  />  </Link>
              <Link href={urlInstagram} target="_blank"><InstagramIcon sx={{ color: teal[50] }}   fontSize="large"  />  </Link>
              <Link href={urlWhatsapp} target="_blank"><WhatsAppIcon sx={{ color: teal[50] }}  fontSize="large"  />  </Link>
          </Grid>
          
        </Grid> 
         
      </Box>
    </footer>
  )
}

export default Footer