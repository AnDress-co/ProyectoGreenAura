import { db } from "../firebase/config";
import { collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

export const createProduct = async (product) => {
  return await addDoc(productsCollection, product);
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