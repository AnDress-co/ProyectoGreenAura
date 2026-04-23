import Navbar from "../components/Navbar"
import PageTransition from "../components/PageTransition"
import { Link, Sprout, ShieldPlus, Rocket, Telescope } from "lucide-react"

const OurPhilosophy = () => {
  return (
    <PageTransition>
      <Navbar />
      <div 
        className="bg-blur-wrapper d-flex align-items-center justify-content-center py-5"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dqf8a6brf/image/upload/v1776485466/BackGroundPhilosophy_zho6cr.png')" }}
      >
        <div className="filosofia-card container p-5 mt-5">

          <h1 className="filosofia-titulo text-center mb-4 mt-5">Nuestra Filosofía</h1>

          <div className="text-center mb-5">
            <h2 className="filosofia-subtitulo mb-3">Filosofía Corporativa: "Sinergia Vital"</h2>
            <p className="filosofia-descripcion mx-auto">
              El bienestar humano en armonía integrada, punto de reunión entre la ciencia y la naturaleza.
            </p>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="pilar-card h-100 p-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Link size={24} color="#C5A059" />
                  <h3 className="pilar-titulo m-0">1. Evolución Consciente</h3>
                </div>
                <p className="pilar-texto m-0">Ecosistemas de salud que integran el bienestar humano de manera integral y sostenible.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pilar-card h-100 p-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Sprout size={24} color="#C5A059" />
                  <h3 className="pilar-titulo m-0">2. Ética de la Tierra</h3>
                </div>
                <p className="pilar-texto m-0">Fuente de fuerza sostenible, comprometida con la naturaleza y el bienestar colectivo.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pilar-card h-100 p-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <ShieldPlus size={24} color="#C5A059" />
                  <h3 className="pilar-titulo m-0">3. Excelencia en la Mediación</h3>
                </div>
                <p className="pilar-texto m-0">Confianza en cada proceso, garantizando calidad y transparencia en todo momento.</p>
              </div>
            </div>
          </div>

          {/* Misión y Visión */}
          <div className="row g-4 mt-2">
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-2 mb-2">
                <Rocket size={24} color="#C5A059" />
                <h3 className="mv-titulo m-0">1.3. Misión</h3>
              </div>
              <p className="mv-texto">
                Promover el bienestar y la prevención mediante herramientas tecnológicas 
                innovadoras que faciliten el acceso a servicios de salud y productos naturales, 
                integrando la ciencia y la naturaleza para mejorar la calidad de vida de nuestra comunidad.
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-2 mb-2">
                <Telescope size={24} color="#C5A059" />
                <h3 className="mv-titulo m-0">1.4. Visión</h3>
              </div>
              <p className="mv-texto">
                Para 2030, buscamos ser el referente líder en soluciones tecnológicas de salud natural, 
                conectando a profesionales y usuarios mediante una plataforma innovadora, segura y 
                accesible que mejore integralmente su calidad de vida.
              </p>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  )
}

export default OurPhilosophy