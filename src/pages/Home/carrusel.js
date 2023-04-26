import Carousel from 'react-bootstrap/Carousel';
import './carrousel.scss';

function Carrusel() {
  return (
    <Carousel >
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-image"
          src="https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/05/JUN05_I_M01.jpg.webp"
          alt="First slide"
        />
        <Carousel.Caption
          style={{
            fontWeight: 'bold',
            backgroundColor: 'black',
            opacity: 0.5
          }}
        >
          <h4>Diseños pensados para cada uno de tus espacios</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-image"
          src="https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2022/05/JUN05_I_M05.jpg.webp"
          alt="Second slide"
        />
        <Carousel.Caption
          style={{
            fontWeight: 'bold',
            backgroundColor: 'black',
            opacity: 0.5
          }}
        >
          <h4>Un toque especial para tu hogar o empresa</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-image"
          src="https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2018/09/WOO01_W_M11.jpg.webp"
          alt="Third slide"
        />
        <Carousel.Caption
          style={{
            fontWeight: 'bold',
            backgroundColor: 'black',
            opacity: 0.5
          }}
        >
          <h4>Visita nuestro catálogo</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-image"
          src="https://static.innovaweb.cl/wordpress/dekko_tienda_wp/2020/12/Mar01_I_M01.jpg.webp"
          alt="Third slide"
        />
        <Carousel.Caption
          style={{
            fontWeight: 'bold',
            backgroundColor: 'black',
            opacity: 0.5
          }}
        >
          <h4>Tenemos muchas categorías y diseños que te encantarán</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
