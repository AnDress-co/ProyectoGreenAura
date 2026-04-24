import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import PageTransition from "../components/PageTransition";

//Creación de la página WhatsNew
const WhatsNew = () => {
    return (
        <>
            <Navbar />
            {/*Este div coloca la imagen como brackground de todo*/}
            <div className="whatsnew-background mt-5">

                <div className="d-flex flex-wrap justify-content-center"></div>
                {/*Contenedor de los productos*/}
                <div className="container-fluid mt-4 d-flex flex-wrap justify-content-center gap-0.5">
                    <ProductCard
                        title="Resina de Shilajit Himalaya"
                        description="Recupera tu vitalidad. Potencia tu bienestar."
                        discount="20% OFF"
                        image="https://thumbs.dreamstime.com/b/resina-shilajit-esencia-mineral-pura-en-un-entorno-natural-353430079.jpg"
                        width={"60rem"}
                        link="/our-philosophy"
                    />

                    <ProductCard
                        title="Aceite de Rosa Mosqueta"
                        description="Piel radiante y nutrición profunda."
                        discount="30% OFF"
                        image="https://acdn-us.mitiendanube.com/stores/002/834/934/products/aceite-mosqueta-15-8047c13f3ab90f0fb617462355796500-1024-1024.webp"
                        width={"30rem"}
                        link="/our-philosophy"
                    />

                    <ProductCard
                        title="Polvo de Reishi Adaptógeno"
                        description="Reduce el estrés y fortalece el sistema."
                        discount="20% OFF"
                        image="https://funginatur.com/wp-content/uploads/2025/07/DSC0211-1-300x200.jpg"
                        width={"45rem"}
                        link = "/our-philosophy"
                    />

                    <ProductCard
                        title="Set de Matcha Ceremonial"
                        description="Calma y concentración."
                        discount="30% OFF"
                        image="https://teaandleaves.co.uk/cdn/shop/files/FullSizeRender_1a139673-a0d0-42e4-80d0-55de61358150.heic?v=1755605067&width=1946"
                        width={"45rem"}
                        link= "/our-philosophy"
                    />
                </div>
            </div>
        </>
    );
};

export default WhatsNew;