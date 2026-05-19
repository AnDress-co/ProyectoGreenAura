import { Link } from 'react-router-dom'

const ErrorPage = ({code, title, description, to}) => {
  return (
    <>    
      <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 gap-lg-5 mt-5 px-3 px-md-5'>
        <div className=''>
          <img 
            src={'https://res.cloudinary.com/dqf8a6brf/image/upload/v1776484638/cartoonBug_offcu4.png'} 
            alt="Cartoon"
            className='img-fluid'
            style={{ maxWidth: "300px", width: "100%" }}
          />
        </div>
        <div className='text-center text-lg-start'>
          <h1 className='text-font fw-bold fs-2 fs-md-1 mb-3'>ERROR: {code}</h1>
          <h3 className='text-uppercase fw-semibold text-dark text-font fs-4 fs-md-3 mb-3'>{title}</h3>
          <p className='text-dark fw-medium fs-5 fs-md-4 mb-4'>{description}</p>
          <Link className='mt-4 btn btn-success text-dark fw-bold' to={to}>
            VOLVER AL INICIO
          </Link>
        </div>
      </div>    
    </>
  );
}

export default ErrorPage;
