import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence} from 'framer-motion'
import Home from '../pages/Home'
import OurPhilosophy from '../pages/OurPhilosophy'
import Login from '../pages/Login'
import ErrorPage from '../components/ErrorPage'
import WhatsNew from '../pages/WhatsNew'

const AppRouter = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/our-philosophy" element={<OurPhilosophy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/promotions" element={<WhatsNew />} />
        {/* Ruta para manejar error HTTP 404 */}
        <Route path="*" element={
          <ErrorPage
            code="404"
            title="la pagina no se ha encontrado"
            description="Debes de haber escogido la puerta incorrecta, ya que no he podido encontrar la página que buscas."
          />}
        />
      </Routes>
    </AnimatePresence>
  )
}

export default AppRouter