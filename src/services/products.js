import { db } from "../firebase/config";
import { collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

export const createProduct = async (product, userId) => {
  return await addDoc(productsCollection, {
    ...product,
    userId,
    createdAt: new Date()
  });
};

export const getProducts = async () => {
  const snapshot = await getDocs(productsCollection);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getProductById = async (id) => {
  const ref = doc(db, "products", id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    throw new Error("Producto no encontrado");
  }

  return {
    id: snapshot.id,
    ...snapshot.data()
  };
};

// Obtener el teléfono del dueño del producto
export const getProductOwnerPhone = async (productId) => {
  try {
    const product = await getProductById(productId);
    
    if (!product.userId) {
      console.warn("⚠️ El producto no tiene userId asociado");
      return null;
    }

    const userRef = doc(db, "users", product.userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const phone = userSnap.data().phone;
      console.log("✅ Teléfono del dueño:", phone);
      return phone;
    } else {
      console.warn("⚠️ Usuario del producto no encontrado");
      return null;
    }
  } catch (err) {
    console.error("❌ Error al obtener teléfono del dueño:", err);
    return null;
  }
};

export const updateProductStatus = async (id, status) => {
  await updateDoc(doc(db, 'products', id), { status });
};

export const updateProduct = async (id, data) => {
  const ref = doc(db, "products", id);
  await updateDoc(ref, data);
};

export const deleteProduct = async (id) => {
  const ref = doc(db, "products", id);
  await deleteDoc(ref);
};