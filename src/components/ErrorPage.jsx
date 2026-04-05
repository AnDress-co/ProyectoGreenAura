import { Link } from 'react-router-dom'

import CartoonBug from '../assets/cartoonBug.png'

const ErrorPage = ({code, title, description}) => {
  return (
    <>    
      <div className='d-flex justify-content-center mt-5'>
        <div className='ms-5'>
          <img src={CartoonBug} alt="Cartoon" />
        </div>
        <div className='align-self-center me-5'>
          <h1 className='text-font fw-bold'>ERROR: {code}</h1>
          <h3 className='text-uppercase fw-semibold text-dark text-font'>{title}</h3>
          <p className=' text-dark fw-medium fs-4'>{description}</p>
          <Link className='mt-4 btn color-custom text-dark fw-bold' to='/'>VOLVER AL INICIO</Link>
        </div>
      </div>    
    </>
  );
}

export default ErrorPage;
