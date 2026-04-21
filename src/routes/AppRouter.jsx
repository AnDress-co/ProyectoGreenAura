import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import OurPhilosophy from '../pages/OurPhilosophy'
import Login from '../pages/Login'
import ErrorPage from '../components/ErrorPage'
import WhatsNew from '../pages/WhatsNew'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-philosophy" element={<OurPhilosophy />} />
      <Route path='/login' element={<Login />} />
      <Route path='/promotions' element = {<WhatsNew/>}/>
      {/* Ruta para manejar error HTTP 404 */}
      <Route path="*" element=
        {<ErrorPage 
          code="404" 
          title="la pagina no se ha encontrado"
          description="Debes de haber escogido la puerta incorrecta, ya que no he podido encontrar la página que buscas."
        />}
      />      
    </Routes>
  )
}

export default AppRouter