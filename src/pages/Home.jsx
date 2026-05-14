import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

import { useEffect, useState } from "react";

import { getProducts } from "../services/products";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const data = await getProducts();

        // SOLO PRODUCTOS ACTIVOS
        const activeProducts = data.filter(
          (product) => product.status === true
        );

        setProducts(activeProducts);

      } catch (error) {

        console.error(
          "Error cargando productos:",
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

      <div className="general-background text-center text-white fs-5 fw-bold py-3 py-md-5 mt-5 mt-md-3">

        <div className="container-fluid mt-2 mt-md-4 d-flex flex-wrap justify-content-center gap-3">

          {loading && (
            <p>Cargando productos...</p>
          )}

          {!loading && products.length === 0 && (
            <p>No hay productos disponibles.</p>
          )}

          {products.map((product) => (

            <ProductCard
              key={product.id}
              title={product.name}
              description={product.description}
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

export default Home;