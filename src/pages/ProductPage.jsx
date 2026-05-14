import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/products";
import { PlayCircle, Send } from "lucide-react";
import Navbar from "../components/Navbar";

const ProductPage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) return <div>Cargando producto...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {!showVideo && <Navbar />}

      <div className={`page-container ${showVideo ? "fade-out" : "fade-in"}`}>
        <div className="product-hero">
          <div className="product-text">
            <h1 className="text-font" style={{ marginTop: "15%" }}>
              {product.name}
            </h1>
            <p className="text-white">{product.description}</p>

            {product.processes && product.processes.length > 0 && (
              <div
                id="processCarousel"
                className="carousel slide mt-3"
                data-bs-ride="carousel"
                style={{ maxWidth: "400px" }}
              >
                <div className="carousel-inner">
                  {product.processes.map((process, index) => (
                    <div
                      key={process.id || index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div
                        className="p-3"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.1)",
                          borderRadius: "10px",
                          borderLeft: "4px solid #ffff",
                        }}
                      >
                        <h5 className="text-font fw-bold">{process.title}</h5>
                        <p
                          className="text-white-50 mb-0"
                          style={{ fontSize: "0.9rem" }}
                        >
                          {process.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {product.processes.length > 1 && (
                  <div className="mt-2">
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#processCarousel"
                      data-bs-slide="prev"
                      style={{ width: "5%", left: "-30px" }}
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#processCarousel"
                      data-bs-slide="next"
                      style={{ width: "5%", right: "-30px" }}
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </div>
                )}
              </div>
            )}
            <button
              className="text-font whatsapp-btn mt-3"
              style={{ marginBottom: "8%" }}
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            >
              Recibe asesoría personalizada{" "}
              <Send className="send-icon" size={30} />
            </button>
          </div>

          <div className="product-image">
            {product.discount && (
              <div className="discount-badge">{product.promotion}</div>
            )}
            <img src={product.imageUrl} alt={product.name} />
            <PlayCircle
              className="play-button text-white"
              onClick={() => setShowVideo(true)}
            />
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="video-fullscreen fade-video">
          <video
            src={product.videoUrl}
            autoPlay
            controls
            onEnded={() => setShowVideo(false)}
          />
        </div>
      )}
    </>
  );
};

export default ProductPage;
