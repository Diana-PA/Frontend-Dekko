import { useContext, useEffect } from "react";
import CardProduct from "../../components/Card";
import ProductContext from "../../Context/product/ProductContext";
import catalogo from '../../images/catalogo.png';
import "./catalogo.scss"

export default function Catalogo() {

  const { getProducts, products } = useContext(ProductContext);


  useEffect(() => {
    const productsNow = async () => {
      await getProducts();
    };

    productsNow();
  }, []);

  return (
    <div>
      <div className="catalogo1" id="menu">
        <p className="mt-2"><img src={catalogo} width="100%" height="100%" className="d-inline-block" alt="catalogo"/></p>
        <br />
        <div className="p-2 container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {products.map((card) => (
              <div className="col-md-4 p-2" key={card.id}>
                <CardProduct
                  title={card.nombre}
                  imageURL={card.urlfoto}
                  text={card.descripcion}
                  id={card._id}
                />
              </div>
            ))}
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
