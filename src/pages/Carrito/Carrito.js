import * as React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 
export default function Carrito() {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={4}  color="secondary">
      <ShoppingCartIcon   />
      </Badge>
    </Stack>
  );
}
