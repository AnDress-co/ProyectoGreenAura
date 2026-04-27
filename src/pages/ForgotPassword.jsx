import Navbar from "../components/Navbar"
import { ChevronsLeft, Mail } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../services/firebase"
import { useState } from "react"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email)
      setError("")
      alert("Correo de recuperación enviado. Revisa tu bandeja de entrada o carpeta de spam.")
      navigate("/login")
    } catch (err) {
      let message = "Ocurrió un error. Intenta nuevamente."

      switch (err.code) {
        case "auth/invalid-email":
          message = "El correo no es válido."
          break;
        case "auth/user-not-found":          
          message = "Si el correo está registrado, recibirás un enlace."
          break;
        case "auth/too-many-requests":
          message = "Demasiados intentos. Intenta más tarde."
          break;
        default:
          message = "Error al enviar el correo. Intenta nuevamente."
      }

      setError(message)
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-5 background-login">
        <div className="pt-5 d-flex justify-content-center">
          <div className="card color-login mt-5" style={{ width: "20rem" }}>
            <button className="btn mb-3 d-flex align-items-center gap-1">
              <Link to="/login" className="text-font">
                <ChevronsLeft />
              </Link>
            </button>
            <form className="card-body text-white" onSubmit={handleReset}>
              <p className="text-center text-font fs-4">RECUPERAR CONTRASEÑA</p>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  <Mail /> Ingresa tu correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="emailHelp"
                />
              </div>
              <div id="alert" className="form-text text-danger p-1 fw-semibold">
                <p>{error}</p>
              </div>
              <div className="pt-4 text-center">
                <button type="submit" className="btn custom-button">
                  RECUPERAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
