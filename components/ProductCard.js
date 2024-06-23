import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', padding: '1rem' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {product.title}
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitLineClamp: 2,
          lineClamp: 2,
          maxHeight: '3rem'
        }}>
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
