import React from 'react'
import { useState } from 'react'

const Modal = ({title, text}) => {
  const [confirm, setConfirm] = useState()

  const handleConfirm = (value) => {
    setConfirm(value);
    return confirm;
  }

  return (
    <>
      <div className="modal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>{text}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setConfirm(handleConfirm(false))} data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-warning" onClick={() => setConfirm(handleConfirm(true))} data-bs-dismiss="modal">Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
