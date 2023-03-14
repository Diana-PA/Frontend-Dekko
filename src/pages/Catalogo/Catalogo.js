
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
 
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
 
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
 

export default function Catalogo() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Hola xxx
        </ListSubheader>
      }
    >
      <ListItemButton>
         <ListItemText primary="Categoria 1" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Categoria 2" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Sub Categoria 2" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
