import { Percent, ChevronsLeft, Plus, X} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { uploadToCloudinary } from '../services/cloudinary';
import { useRef } from "react";

const ProductInformation = ({title, iconTitle, buttonTitle, iconButton, initialData = {}, onSubmit}) => {
  const [name, setName] = useState(initialData.name || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [status, setStatus] = useState(true);
  const [promotion, setPromotion] = useState(initialData.promotion || '');
  const [isPromotionActive, setIsPromotionActive] = useState(false);
  const [processes, setProcesses] = useState([
    initialData.processes || { id: 1, title: '', description: '' }
  ]);
  const imageRef = useRef();
  const videoRef = useRef();
  const [loading, setLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (processes.length > 10) {
      alert("Máximo 10 procesos");
      return;
    }

    try {
      setLoading(true);

      // 🔥 subir archivos
      const imageUrl = imageFile 
        ? await uploadToCloudinary(imageFile) 
        : null;

      const videoUrl = videoFile 
        ? await uploadToCloudinary(videoFile) 
        : null;

      
      const newProduct = {
        name,
        description,
        imageUrl,
        videoUrl,
        status,
        promotion: isPromotionActive ? promotion : null,
        processes
      };

      await onSubmit(newProduct);

      setName('');
      setDescription('');      
      setStatus(true);
      setPromotion('');
      setProcesses([{ id: 1, title: '', description: '' }]);
      imageRef.current.value = '';
      videoRef.current.value = '';

      alert("Producto creado 🚀");
    } catch (error) {
      console.error(error);
      alert("Error al crear producto");
    } finally {
      setLoading(false);
    }
  };

  const addProcess = () => {
    const newId = Math.max(...processes.map(p => p.id), 0) + 1
    setProcesses([...processes, { id: newId, title: '', description: '' }])
  }

  const removeProcess = (id) => {
    if (processes.length > 1) {
      setProcesses(processes.filter(p => p.id !== id))
    }
  }

  const updateProcess = (id, field, value) => {
    setProcesses(processes.map(p => p.id === id ? { ...p, [field]: value } : p))
  }

  return (
    <>
      <div className="philosophy-card container p-3 mt-5">
        <button className="btn mb-3 d-flex align-items-center gap-1">
          <Link to="/dashboard" className="text-font">
            <ChevronsLeft />
          </Link>
        </button>
        <h1 className="mt-2 text-font text-center">
          {title} {iconTitle}
        </h1>
        <form className="p-5" onSubmit={handleSubmit}>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="discountCheck"
              checked={isPromotionActive}              
              onChange={(e) => {
                const checked = e.target.checked;
                setIsPromotionActive(checked);

                if (!checked) {
                  setPromotion('');
                }
              }}
            />
            <label
              htmlFor="discountCheck"
              className="form-check-label text-font"
            >
              ¿Promocion activa?
            </label>
          </div>
          <div className="input-group mb-3" style={{ maxWidth: "190px" }}>
            <span className="input-group-text" id="discount">
              <Percent size={20} />
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Descuento"
              value={promotion}
              disabled={!isPromotionActive}
              onChange={(e) => setPromotion(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="statusCheck"
              checked={status}
              onChange={(e) => setStatus(e.target.checked)}
            />
            <label
              htmlFor="statusCheck"
              className="form-check-label text-font"
            >
              ¿Ver producto en panel de cliente?
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label text-font fs-4">
              Nombre del producto
            </label>
            <input 
              type="text" 
              className="form-control" 
              id="productName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Informacion del producto"
              id="description"
              value={description}
              style={{ height: "150px" }}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label htmlFor="description">Descripcion del producto</label>
          </div>
          <div className="mb-3">
            <label htmlFor="productFile" className="form-label text-font fs-4">
              Imagen del producto
            </label>
            <input 
              className="form-control"
              ref={imageRef}
              type="file" 
              id="productFile" 
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productVideo" className="form-label text-font fs-4">
              Video del producto
            </label>
            <input 
              className="form-control"
              ref={videoRef}
              type="file" 
              id="productVideo"
              onChange={(e) => setVideoFile(e.target.files[0])} 
              />
          </div>
          <div className="mb-5">
            <label className="form-label text-font fs-4">
              Proceso de producción
            </label>
            {processes.map((process) => (
              <div key={process.id} className="row g-3 mb-3">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Título del proceso"
                    value={process.title}
                    onChange={(e) =>
                      updateProcess(process.id, "title", e.target.value)
                    }
                  />
                </div>
                <div className="col-12 col-md-6">
                  <div className="d-flex gap-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Descripción del proceso"
                      value={process.description}
                      onChange={(e) =>
                        updateProcess(process.id, "description", e.target.value)
                      }
                    />
                    {processes.length > 1 && (
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => removeProcess(process.id)}
                      >
                        <X size={20} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="btn custom-button d-flex align-items-center gap-2"
              onClick={addProcess}
            >
              Agregar proceso <Plus size={20} />
            </button>
          </div>
          <button type="submit" className="btn custom-button" disabled={loading}>
            {loading ? "Guardando..." : <>{iconButton} {buttonTitle}</>}
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductInformation;