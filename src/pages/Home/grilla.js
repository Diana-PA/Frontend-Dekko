import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; 
import "./grilla.scss"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Grilla() {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
        <Box gridColumn="span 8">
          <Item>
            <img
              className="d-block w-100 grillaimg"
              src="https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/05/JUN05_I_M05.jpg.webp"
              alt="Second slide"
            />
          </Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>
            <img
              className="d-block w-100 grillaimg"
              src="https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/05/JUN05_I_M07.jpg.webp"
              alt="Second slide"
            />
          </Item>
          <br />
          <Item>
            <img
              className="d-block w-100 grillaimg"
              src="https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/02/SEA01_I_M01.jpg.webp"
              alt="Second slide"
            />
          </Item>
        </Box>
        <Box gridColumn="span 4">
          <Item>
            <img
              className="d-block w-100 grillaimg"
              src="https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/02/NAT01_I_M05.jpg.webp"
              alt="Second slide"
            />
          </Item>
          <br />
          <Item>
            <img
              className="d-block w-100 grillaimg"
              src="https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/08/SKY01_W_M04.jpg.webp"
              alt="Second slide"
            />
          </Item>
        </Box>
        <Box gridColumn="span 8">
          <Item>
            <img
              className="d-block w-100 grillaimg"
              src="https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2023/02/NAT01_I_M028.jpg.webp"
              alt="Second slide"
            />
          </Item>
        </Box>
      </Box>
    </Box>
  );
}
