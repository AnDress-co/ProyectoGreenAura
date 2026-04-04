import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import NuestraFilosofia from '../pages/NuestraFilosofia'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/nuestra-filosofia" element={<NuestraFilosofia />} />
    </Routes>
  )
}

export default AppRouter