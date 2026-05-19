import { useState, useEffect } from "react"
import { updateProfile } from "firebase/auth"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { useAuth } from "../context/AuthContext"
import { db } from "../firebase/config"

const useProfile = () => {
  const { user } = useAuth()
  const [firestoreData, setFirestoreData] = useState(null)
  const [updating, setUpdating] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!user) return
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setFirestoreData(docSnap.data())
        }
      } catch (err) {
        console.error("Error al obtener datos del usuario", err)
      }
    }
    fetchUserData()
  }, [user])

  const profile = {
    name:      user?.displayName        ?? "Administrador",
    email:     user?.email              ?? "Sin correo",
    photo:     user?.photoURL           ?? null,
    role:      firestoreData?.role      ?? "Administrador",
    phone:     firestoreData?.phone     ?? "Sin número",
    createdAt: user?.metadata?.creationTime
      ? new Date(user.metadata.creationTime).toLocaleDateString("es-CO", {
          year:  "numeric",
          month: "long",
          day:   "numeric",
        })
      : "Sin fecha",
  }

  const updateDisplayName = async (newName) => {
    setUpdating(true)
    setError(null)
    setSuccess(false)
    try {
      await updateProfile(user, { displayName: newName })
      setSuccess(true)
    } catch (err) {
      setError("No se pudo actualizar el nombre. Intenta de nuevo.")
      console.error(err)
    } finally {
      setUpdating(false)
    }
  }

  const updatePhone = async (newPhone) => {
    setUpdating(true)
    setError(null)
    setSuccess(false)
    try {
      const docRef = doc(db, "users", user.uid)
      await updateDoc(docRef, { phone: newPhone })
      setFirestoreData(prev => ({ ...prev, phone: newPhone }))
      setSuccess(true)
    } catch (err) {
      setError("No se pudo actualizar el teléfono. Intenta de nuevo.")
      console.error(err)
    } finally {
      setUpdating(false)
    }
  }

  return { profile, updating, error, success, updateDisplayName, updatePhone }
}

export default useProfile