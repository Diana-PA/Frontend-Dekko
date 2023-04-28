import { useContext, useEffect } from "react";
import CardProduct from "../../components/Card";
import ProductContext from "../../Context/product/ProductContext";

export default function Catalogo() {

  const { getProducts, products } = useContext(ProductContext);


  useEffect(() => {
    const productsNow = async () => {
      await getProducts();
    };

    productsNow();
  }, []);

  return (
    // <Album />
    <div>
      <div className="bg-secondary" id="menu">
        <br />
        <h1 className="text-center fw-bold fst-italic">Menú</h1>
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
