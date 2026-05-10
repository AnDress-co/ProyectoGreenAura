import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../services/products"
import Navbar from "../components/Navbar"

const ProductPage = () => {

    const [showVideo, setShowVideo] = useState(false)
    const { id } = useParams()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const loadProduct = async () => {
            try {
                const data = await getProductById(id)
                setProduct(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadProduct()

    }, [id])

    if (loading) {
        return <div>Cargando producto...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <>
            {!showVideo && <Navbar />}

            <div className={`page-container ${showVideo ? "fade-out" : "fade-in"}`}>
                <div className="product-hero">

                    <div className="product-text">
                        <h1>{product.title}</h1>
                        
                        <p>{product.description}</p>

                        <button className="whatsapp-btn">
                            Hablar con un asesor
                        </button>
                    </div>

                    <div className="product-image">

                        <img src={product.image} alt={product.title} />

                        <div
                            className="play-button"
                            onClick={() => setShowVideo(true)}
                        >
                        </div>

                    </div>
                </div>
            </div>

            {showVideo && (
                <div className="video-fullscreen fade-video">
                    <video
                        src={product.video}
                        autoPlay
                        controls
                        onEnded={() => setShowVideo(false)}
                    />
                </div>
            )}
        </>
    )

}

export default ProductPage
