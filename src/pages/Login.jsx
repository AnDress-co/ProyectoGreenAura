import { Link } from "react-router-dom";
import { Mail, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      navigate("/dashboard");
    } catch (err) {
      let message = "Error al iniciar sesión.";

      switch (err.code) {
        case "auth/invalid-email":
          message = "Correo inválido.";
          break;
        case "auth/user-not-found":
        case "auth/wrong-password":          
          message = "Correo o contraseña incorrectos.";
          break;
        case "auth/too-many-requests":
          message = "Demasiados intentos. Intenta más tarde.";
          break;
        case "auth/user-disabled":
          message = "Esta cuenta ha sido deshabilitada.";
          break;
        default:
          message = "No se pudo iniciar sesión. Intenta nuevamente.";
      }
      setError(message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-5 background-login">
        <div className="pt-5 d-flex justify-content-center">
          <div className="card color-login mt-5" style={{ width: "20rem" }}>
            <form className="card-body text-white" onSubmit={handleLogin}>
              <p className="text-center text-font fs-4">INICIAR SESIÓN</p>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  <Mail /> Correo
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
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  <LockKeyhole /> Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div id="alert" className="form-text text-danger p-1 fw-semibold">
                {error}
              </div>
              <div className="d-flex justify-content-end">
                <Link className="text-light" to="/forgot-password">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="pt-4 text-center">
                <button type="submit" className="btn custom-button">
                  INICIAR SESIÓN
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
