import Navbar from "../components/Navbar"

const OurPhilosophy = () => {
  return (
    <>
      <Navbar />
      <div className="filosofia-wrapper">
        <div className="filosofia-card">

          {/* Título principal */}
          <h1 className="filosofia-titulo">Nuestra Filosofía</h1>

          {/* Filosofía Corporativa */}
          <div className="filosofia-corporativa">
            <h2 className="filosofia-subtitulo">Filosofía Corporativa: "Sinergia Vital"</h2>
            <p className="filosofia-descripcion">
              El bienestar humano en armonía integrada, punto de reunión entre la ciencia y la naturaleza.
            </p>
          </div>

          {/* 3 Pilares */}
          <div className="filosofia-pilares">
            <div className="pilar-card">
              <div className="pilar-header">
                <span className="pilar-icono">🔗</span>
                <h3>1. Evolución Consciente</h3>
              </div>
              <p>Ecosistemas de salud que integran el bienestar humano de manera integral y sostenible.</p>
            </div>

            <div className="pilar-card">
              <div className="pilar-header">
                <span className="pilar-icono">🌱</span>
                <h3>2. Ética de la Tierra</h3>
              </div>
              <p>Fuente de fuerza sostenible, comprometida con la naturaleza y el bienestar colectivo.</p>
            </div>

            <div className="pilar-card">
              <div className="pilar-header">
                <span className="pilar-icono">✅</span>
                <h3>3. Excelencia en la Mediación</h3>
              </div>
              <p>Confianza en cada proceso, garantizando calidad y transparencia en todo momento.</p>
            </div>
          </div>

          {/*Misión y Visión*/}
          <div className="filosofia-mv">
            <div className="mv-item">
              <h3>1.3. Misión 🚀</h3>
              <p>Ser el ecosistema de salud que conecta a las personas con lo mejor de la naturaleza.</p>
            </div>
            <div className="mv-item">
              <h3>1.4. Visión 🔭</h3>
              <p>Ser referentes globales en bienestar natural, liderando con transparencia y propósito.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default OurPhilosophy