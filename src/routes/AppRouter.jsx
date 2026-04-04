import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import OurPhilosophy from '../pages/OurPhilosophy'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-philosophy" element={<OurPhilosophy />} />
      /* Ruta para manejar error HTTP 404 */
      <Route path="*" element={<div>HTTP 404: Página no encontrada.</div>} />
    </Routes>
  )
}

export default AppRouter