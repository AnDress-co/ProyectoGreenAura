import React from 'react'

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
      <div className="text-center">
        <div className="spinner-border text-success mb-3" role="status" style={{width: '4rem', height: '4rem'}}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <h3 className="text-success fw-bold">Cargando...</h3>
        <p className="text-muted">Por favor espera</p>
      </div>
    </div>
  )
}

export default Loading
