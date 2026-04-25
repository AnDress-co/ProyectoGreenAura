import { Link } from 'react-router-dom'

const ErrorPage = ({code, title, description}) => {
  return (
    <>    
      <div className='d-flex justify-content-center mt-5'>
        <div className='ms-5'>
          <img src={'https://res.cloudinary.com/dqf8a6brf/image/upload/v1776484638/cartoonBug_offcu4.png'} alt="Cartoon" />
        </div>
        <div className='align-self-center me-5'>
          <h1 className='text-font fw-bold'>ERROR: {code}</h1>
          <h3 className='text-uppercase fw-semibold text-dark text-font'>{title}</h3>
          <p className=' text-dark fw-medium fs-4'>{description}</p>
          <Link className='mt-4 btn btn-success text-dark fw-bold' to='/'>VOLVER AL INICIO</Link>
        </div>
      </div>    
    </>
  );
}

export default ErrorPage;
