import ProductContext from "../../Context/product/ProductContext";
import { useContext } from "react";
import Album from "../Catalogo/Album";

const Products = () => {
    const {getProducts} = useContext(ProductContext)

    useEffect(() => {
        const fetchProducts = async() => {
            await getProducts()
        }
        fetchProducts()
    }, [])

return (
    <div>
        <Album />
    </div>
)

}