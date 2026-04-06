import Navbar from "../components/Navbar"

const NuestraFilosofia = () => {
  return (
    <>
      <Navbar />
      <div className="filosofia-wrapper d-flex align-items-center justify-content-center py-5">
        <div className="filosofia-card container p-5">

          <h1 className="filosofia-titulo text-center mb-4">Nuestra Filosofía</h1>

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
                  <span className="pilar-icono">🔗</span>
                  <h3 className="pilar-titulo m-0">1. Evolución Consciente</h3>
                </div>
                <p className="pilar-texto m-0">Ecosistemas de salud que integran el bienestar humano de manera integral y sostenible.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pilar-card h-100 p-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="pilar-icono">🌱</span>
                  <h3 className="pilar-titulo m-0">2. Ética de la Tierra</h3>
                </div>
                <p className="pilar-texto m-0">Fuente de fuerza sostenible, comprometida con la naturaleza y el bienestar colectivo.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="pilar-card h-100 p-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="pilar-icono">✅</span>
                  <h3 className="pilar-titulo m-0">3. Excelencia en la Mediación</h3>
                </div>
                <p className="pilar-texto m-0">Confianza en cada proceso, garantizando calidad y transparencia en todo momento.</p>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="mv-titulo">1.3. Misión 🚀</h3>
              <p className="mv-texto">Ser el ecosistema de salud que conecta a las personas con lo mejor de la naturaleza.</p>
            </div>
            <div className="col-md-6">
              <h3 className="mv-titulo">1.4. Visión 🔭</h3>
              <p className="mv-texto">Ser referentes globales en bienestar natural, liderando con transparencia y propósito.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default NuestraFilosofia