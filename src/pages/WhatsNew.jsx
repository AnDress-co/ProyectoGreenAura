import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import { useEffect, useState } from "react";

import { getProducts } from "../services/products";

const WhatsNew = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const data = await getProducts();

        const promotionProducts = data.filter(
          (product) =>
            product.status === true &&
            product.discount === true
        );

        setProducts(promotionProducts);

      } catch (error) {

        console.error(
          "Error cargando promociones:",
          error
        );

      } finally {

        setLoading(false);

      }
    };

    fetchProducts();

  }, []);

  return (
    <>
      <Navbar />

      <div className="general-background mt-4 mt-md-5 text-white min-vh-100 py-4">

        <div className="container">

          {loading && (
            <p className="text-center fs-5 fw-bold">
              Cargando promociones...
            </p>
          )}

          {!loading && products.length === 0 && (
            <p className="text-center fs-5 fw-bold">
              No hay promociones activas.
            </p>
          )}

          <div className="row">

            {products.map((product) => (

              <div
                key={product.id}
                className="col-12 col-md-6 mb-4 d-flex"
              >

                <div className="w-100">

                  <ProductCard
                    title={product.name}
                    description={product.description}
                    discount={
                      product.discount
                        ? product.promotion
                        : null
                    }
                    image={product.imageUrl}
                    link={`/product/${product.id}`}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  );
};

export default WhatsNew;