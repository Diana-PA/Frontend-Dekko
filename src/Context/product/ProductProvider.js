import axiosClient from '../../config/axiosClient'
import ProductContext from './ProductContext'
import {useReducer} from 'react'
import productReducer from './ProductReducer'


const ProductProvider = ({children}) => {


    const initialState = {
        products: [],
        product: [{
            sku: "",
            clase: "",
            categoria: "",
            catalogo: "",
            nombre: "",
            descripcion: "",
            urlfoto: "",
            urlambientacion: "",
            stock: "",
            ancho: "",
            alto: "",
            peso: "",
            precio: ""
        }]
    }

    const [productState, dispatch] = useReducer(productReducer, initialState)

    const getProducts = async() => {
        try {
            const products = await axiosClient.get("/product")
            const productsInfo = products.data.info;
    
            dispatch(
                {
                    type:"GET_PRODUCTS", 
                    payload: productsInfo
                })
        }
        catch (error) {
            console.log(error)
        }
    }

    const getProduct = async(id) => {
        try {
            const product = await axiosClient.get(`/product/${id}`)
            const productInfo = product.data.info;
    
            dispatch(
                {
                    type:"GET_PRODUCT", 
                    payload: productInfo
                })
        }
        catch (error) {
            console.log(error)
        }
    }

  return (
    <ProductContext.Provider value={{getProduct, getProducts, products: productState.products, product: productState.product}}>{children}
    </ProductContext.Provider>

  )
}

export default ProductProvider