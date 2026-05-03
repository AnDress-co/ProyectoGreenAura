import Navbar from '../components/Navbar';
import { Search, GripVertical, Eye, EyeOff, Pencil, Trash2, Plus } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {  
  const [showProduct, setShowProduct] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setShowProduct(!showProduct);
  };

  const handleEditClick = () => {
    navigate('/edit-product');    
  };

  const handleAddClick = () => {
    navigate('/add-product');    
  };

  const handleDeleteClick = () => {    
    alert('Seguro que deseas eliminar este producto? Esta acción no se puede deshacer.');
  }

  return (
    <>
      <Navbar />
      <div className="general-background py-5">
        <div className="philosophy-card container p-3 mt-5">
          <h1 className='mt-2 text-font text-center'>GESTION DE PRODUCTOS</h1>
          <form className='mb-3 mt-4' onSubmit={(e) => e.preventDefault()}>
            <div className='d-flex flex-wrap justify-content-between align-items-center gap-3'>
              <div className='input-group' style={{ maxWidth: "350px" }}>
                <span className='input-group-text' id="basic-addon1"><Search size={20} /></span>
                <input type="text" className='form-control' placeholder="Buscar productos..." aria-label="Username" aria-describedby="basic-addon1"/>            
              </div>
              <div>
                <button type="submit" className='btn custom-button' onClick={handleAddClick}><Plus size={20} /> AGREGAR PRODUCTO</button>
              </div>
            </div>
          </form>
          <div className="philosophy-card pt-3 mt-5 d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 gap-md-3 gap-lg-4 w-100 ps-3 ps-md-5 pe-3 pe-md-5">
            <div className='d-flex align-items-center gap-2 gap-md-3'>
              <p className='text-font fs-3 fs-md-2 m-0'><GripVertical size={40} /></p>
              <p className='text-font fs-4 fs-md-2 m-0'>Num.1</p>
            </div>
            <img 
              src="https://thumbs.dreamstime.com/b/resina-shilajit-esencia-mineral-pura-en-un-entorno-natural-353430079.jpg" 
              alt="Producto 1" 
              className='img-fluid rounded mb-1 mb-md-3'
              style={{ maxWidth: "160px", width: "100%", minWidth: "100px" }}
            />
            <p className='text-font fs-3 fs-md-4 fs-lg-1 m-0 text-center text-lg-start' style={{ minWidth: "150px" }}>Resina de Shilajit Himalaya</p>
            <button className='btn custom-button' onClick={handleEditClick}><Pencil size={20} /></button>
            <button className='btn custom-button' onClick={handleDeleteClick}><Trash2 size={20} /></button>
            <div className='d-flex align-items-center justify-content-center gap-3 gap-md-4 mb-3 mb-md-0'>
              <input 
                className="form-check-input" 
                style={{ width: "28px", height: "28px", cursor: "pointer" }} 
                type="checkbox" 
                value="" 
                checked={showProduct}
                onChange={handleCheckboxChange}
                aria-describedby="inputGroup-sizing-lg"
              />
              <label className="text-font fs-4 fs-md-3" style={{ cursor: "pointer" }}>Mostrar</label>
              {showProduct ? <Eye size={35} className='text-font' /> : <EyeOff size={35} className='text-font' />}
            </div>                        
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
