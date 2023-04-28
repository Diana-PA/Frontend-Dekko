import { useContext, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ProductContext from "../../../Context/product/ProductContext"


const ProductDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const {getProduct, product} = useContext(ProductContext)

    useEffect(() => {
        const productNow = async() => {
            await getProduct(id)
        }

        productNow()
    }, [])

    const { sku, clase, categoria, catalogo, nombre, descripcion, urlfoto, urlambientacion, stock,
    ancho, alto, peso, precio} = product[0]

  return (
    <div>
        <h1>{nombre}</h1>
        <img src={urlfoto} alt="" />
        <p>{descripcion}</p>
        <h3>Caracteristicas: </h3>
        {/* COlocar cac */}
        <h4>$ {precio}</h4>
        <button>Comprar</button>
        <button onClick={() => navigate("/catalogo")}>Volver al Catalogo</button>
    </div>
  )
}

export default ProductDetails