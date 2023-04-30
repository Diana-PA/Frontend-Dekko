import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './cards.scss'

export default function CardProduct({imageURL, text, id}) {
    const navigate = useNavigate()
  return (
    <Card 
    // sx={{ maxWidth: 345 }}
    className='card-catalogo'
    >
      <CardMedia
        sx={{ 
          height: 300,
          width: 370
        }}
        image={imageURL}
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(`/product/${id}`)} size="small">Ir al Producto</Button>
      </CardActions>
    </Card>
  );
}