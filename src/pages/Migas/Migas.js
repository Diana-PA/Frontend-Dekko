import * as React from 'react';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';

export default function Migas() {
  return (
    <Breadcrumbs separator={<KeyboardArrowLeft />} aria-label="breadcrumbs">
      <Typography fontSize="inherit">Amy</Typography>
      {['Characters', 'Futurama', 'TV Shows', 'Home'].map((item: string) => (
        <Link
          // `preventDefault` is for demo purposes
          // and is generally not needed in your app
          onClick={(event) => event.preventDefault()}
          key={item}
          underline="hover"
          color="neutral"
          fontSize="inherit"
          href="/"
        >
          {item}
        </Link>
      ))}
    </Breadcrumbs>
  );
}

/*import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Migas() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Migas;
*/