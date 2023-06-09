import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


export default function Separador() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack >
        <Box component="span" sx={{  border: '2px solid  #0097a7' }}></Box>
        <Box component="span" sx={{  border: '2px solid  white' }}></Box>
        <Box component="span" sx={{  border: '2px solid  #0097a7' }}></Box>
      </Stack>
    </Box>
  );
}