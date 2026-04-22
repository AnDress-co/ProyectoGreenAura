import Navbar from "../components/Navbar"
import ProductCard from "../components/ProductCard"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="general-background text-center text-white fs-5 fw-bold py-5">
        <div className="container-fluid mt-4 d-flex flex-wrap justify-content-center gap-0.5">
          <ProductCard
            title="Resina de Shilajit Himalaya"
            description="Recupera tu vitalidad. Potencia tu bienestar."            
            image="https://thumbs.dreamstime.com/b/resina-shilajit-esencia-mineral-pura-en-un-entorno-natural-353430079.jpg"
            width={"60rem"}
          />

          <ProductCard
            title="Aceite de Rosa Mosqueta"
            description="Piel radiante y nutrición profunda."            
            image="https://acdn-us.mitiendanube.com/stores/002/834/934/products/aceite-mosqueta-15-8047c13f3ab90f0fb617462355796500-1024-1024.webp"
            width={"30rem"}
          />

          <ProductCard
            title="Polvo de Reishi Adaptógeno"
            description="Reduce el estrés y fortalece el sistema."            
            image="https://funginatur.com/wp-content/uploads/2025/07/DSC0211-1-300x200.jpg"
            width={"45rem"}
          />

          <ProductCard
            title="Set de Matcha Ceremonial"
            description="Calma y concentración."            
            image="https://teaandleaves.co.uk/cdn/shop/files/FullSizeRender_1a139673-a0d0-42e4-80d0-55de61358150.heic?v=1755605067&width=1946"
            width={"45rem"}
          />
        </div>        
      </div>      
    </>
  )
}

export default Home
