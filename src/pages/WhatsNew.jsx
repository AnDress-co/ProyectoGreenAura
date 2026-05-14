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

      <div className="general-background mt-4 mt-md-5 text-center text-white fs-5 fw-bold">

        <div className="container-fluid mt-2 mt-md-4 d-flex flex-wrap justify-content-center gap-3">

          {loading && (
            <p>Cargando promociones...</p>
          )}

          {!loading && products.length === 0 && (
            <p>No hay promociones activas.</p>
          )}

          {products.map((product) => (

            <ProductCard
              key={product.id}
              title={product.name}
              description={product.description}
              discount={product.discount ? product.promotion : null}
              image={product.imageUrl}
              width={"100%"}
              link={`/product/${product.id}`}
            />

          ))}

        </div>
      </div>
    </>
  );
};

export default WhatsNew;