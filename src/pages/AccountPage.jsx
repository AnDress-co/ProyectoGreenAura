import { useState } from "react"
import { CircleUserRound, Pencil, Check, X } from "lucide-react"
import Navbar from "../components/Navbar"
import PageTransition from "../components/PageTransition"
import useProfile from "../services/useProfile"

const AccountPage = () => {
  const { profile, updating, error, success, updateDisplayName, updatePhone } = useProfile()

  const [editingName, setEditingName] = useState(false)
  const [editingPhone, setEditingPhone] = useState(false)
  const [newName, setNewName] = useState("")
  const [newPhone, setNewPhone] = useState("")

  const handleSaveName = async () => {
    await updateDisplayName(newName)
    setEditingName(false)
  }

  const handleSavePhone = async () => {
    await updatePhone(newPhone)
    setEditingPhone(false)
  }

  return (
    <PageTransition>
      <Navbar />
      <div className="min-vh-100 d-flex align-items-center justify-content-center account-wrapper" style={{ backgroundColor: "#f4f1e8" }}>
        <div className="card shadow p-5 account-card w-100">

          {/* Avatar */}
          <div className="text-center mb-4">
            <div className="account-avatar rounded-circle border d-flex align-items-center justify-content-center mx-auto mb-3">
              <CircleUserRound size={64} color="#C5A059" />
            </div>
            <span className="badge account-role px-3 py-2">
              {profile.role}
            </span>
          </div>

          {/* Datos */}
          <div className="d-flex flex-column gap-4">

            {/* Nombre */}
            <div className="border-bottom pb-3">
              <label className="text-muted small text-uppercase d-block mb-1">Nombre completo</label>
              {editingName ? (
                <div className="d-flex align-items-center gap-2">
                  <input
                    className="form-control account-input"
                    defaultValue={profile.name}
                    onChange={(e) => setNewName(e.target.value)}
                    autoFocus
                  />
                  <button className="btn btn-sm" onClick={handleSaveName} disabled={updating}>
                    <Check size={18} color="#C5A059" />
                  </button>
                  <button className="btn btn-sm" onClick={() => setEditingName(false)}>
                    <X size={18} color="#999" />
                  </button>
                </div>
              ) : (
                <div className="d-flex align-items-center justify-content-between">
                  <span className="account-value">{profile.name}</span>
                  <button className="btn btn-sm" onClick={() => setEditingName(true)}>
                    <Pencil size={16} color="#C5A059" />
                  </button>
                </div>
              )}
            </div>

            {/* Correo */}
            <div className="border-bottom pb-3">
              <label className="text-muted small text-uppercase d-block mb-1">Correo electrónico</label>
              <span className="account-value">{profile.email}</span>
            </div>

            {/* Teléfono */}
            <div className="border-bottom pb-3">
              <label className="text-muted small text-uppercase d-block mb-1">Número de celular</label>
              {editingPhone ? (
                <div className="d-flex align-items-center gap-2">
                  <input
                    className="form-control account-input"
                    defaultValue={profile.phone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    autoFocus
                  />
                  <button className="btn btn-sm" onClick={handleSavePhone} disabled={updating}>
                    <Check size={18} color="#C5A059" />
                  </button>
                  <button className="btn btn-sm" onClick={() => setEditingPhone(false)}>
                    <X size={18} color="#999" />
                  </button>
                </div>
              ) : (
                <div className="d-flex align-items-center justify-content-between">
                  <span className="account-value">{profile.phone}</span>
                  <button className="btn btn-sm" onClick={() => setEditingPhone(true)}>
                    <Pencil size={16} color="#C5A059" />
                  </button>
                </div>
              )}
            </div>

            {/* Rol */}
            <div className="border-bottom pb-3">
              <label className="text-muted small text-uppercase d-block mb-1">Rol</label>
              <span className="account-value">{profile.role}</span>
            </div>

            {/* Miembro desde */}
            <div>
              <label className="text-muted small text-uppercase d-block mb-1">Miembro desde</label>
              <span className="account-value">{profile.createdAt}</span>
            </div>

          </div>

          {/* Feedback */}
          {error   && <p className="text-danger text-center mt-3 small">{error}</p>}
          {success && <p className="text-success text-center mt-3 small">¡Cambios guardados!</p>}

        </div>
      </div>
    </PageTransition>
  )
}

export default AccountPage