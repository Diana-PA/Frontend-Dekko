import { useContext, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ProductContext from "../../../Context/product/ProductContext"
import CartContext from "../../../Context/Carrito/CartContext"
import Carousel from 'react-bootstrap/Carousel';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './details.scss'


const ProductDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { getProduct, product } = useContext(ProductContext)
    const {addItemToCart, cartCount} = useContext(CartContext)

    const handleButton = () => {
      addItemToCart(product[0]);
      console.log(cartCount)
    }

    useEffect(() => {
        const productNow = async() => {
          const data =  await getProduct(id);
          getProduct(data);
        };

        productNow();
    }, [getProduct, id]);

    const { sku, clase, categoria, descripcion, urlfoto, urlambientacion,
    ancho, alto, peso, precio} = product[0]

  return (
    <div className="tarjeta">
        <p>SKU: {sku}</p>
        <div className="images-url">
        <Carousel >
        <Carousel.Item interval={3000}>
          <img
            className="url"
            src={urlfoto}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="ambiente"
            src={urlambientacion}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
        </div>
        <p>{descripcion}</p>
        <h4>Caracteristicas: </h4>
        <p>Categoría: {categoria}</p>
        <p>Clase: {clase}</p>
        <p>Ancho: {ancho}cm</p>
        <p>Alto: {alto}cm</p>
        <p>Peso: {peso}gr</p>
        <h4>$ {precio}</h4>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <Button variant="outlined" onClick={handleButton}>Comprar</Button>
          <Button variant="outlined" onClick={() => navigate("/catalogo")}>Volver al Catalogo</Button>
        </Stack>
    </div>
  )
}

export default ProductDetails