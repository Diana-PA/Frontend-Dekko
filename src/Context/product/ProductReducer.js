
const productReducer = (state, action) => {
    const {type, payload} = action;

    switch (type){
        case "GET_PRODUCTS":
            return {
                ...state,
                products: payload,
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
        case "GET_PRODUCT":
            return{
                ...state,
                product: [payload]
            }
        default:
            return state
    }
}

export default productReducer;