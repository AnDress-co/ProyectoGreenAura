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

      <div className="general-background text-white py-3 py-md-5 mt-5 mt-md-3 min-vh-100">

        <div className="container">

          {loading && (
            <p className="text-center fs-5 fw-bold">
              Cargando productos...
            </p>
          )}

          {!loading && products.length === 0 && (
            <p className="text-center fs-5 fw-bold">
              No hay productos disponibles.
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

export default Home;