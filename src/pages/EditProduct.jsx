import Navbar from "../components/Navbar";
import ProductInformation from "../components/ProductInformation";
import { PencilLine, Save } from "lucide-react";
import { updateProduct, getProductById } from "../services/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  // 👇 evita render antes de tener datos
  if (!product) return <p>Cargando...</p>;
  return (
    <>
      <Navbar />
      <div className="general-background py-5">
        <ProductInformation
          title="EDITAR PRODUCTO"
          iconTitle={<PencilLine size={40} />}
          iconButton={<Save size={20} />}
          buttonTitle="GUARDAR CAMBIOS"
          initialData={product}
          onSubmit={(data) => updateProduct(product.id, data)}
        />
      </div>
    </>
  );
};

export default EditProduct;
