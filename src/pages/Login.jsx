import Navbar from '../components/Navbar'

import { Link } from 'react-router-dom'
import { CircleUserRound, LockKeyhole } from 'lucide-react'

const Login = () => {
  return (
    <>
      < Navbar />
      <div className='pt-5 background-login'>
        <div className='pt-5 d-flex justify-content-center'>
          <div className='card color-login mt-5' style={{width: '20rem'}}>
            <form className='card-body text-white'>
              <p className='text-center text-font fs-4'>INICIAR SESION</p>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label"><CircleUserRound /> Usuairo</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />                
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label"><LockKeyhole /> Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div id="alert" className="form-text text-white">Alert...</div>
              <div className='d-flex justify-content-end'>                
                <Link className='text-light' to="/recover-password">¿Olvidaste tu contraseña?</Link>
              </div>              
              <div className='pt-4 text-center'>
                <button type="submit" className="btn custom-button">INICIAR SESION</button>
              </div>
            </form>
          </div> 
        </div>
      </div>      
    </> 
  )
}

export default Login
