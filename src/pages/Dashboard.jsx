import Navbar from "../components/Navbar";
import {
  Search,
  GripVertical,
  Eye,
  EyeOff,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProducts,
  updateProductStatus,
  deleteProduct,
} from "../services/products";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Cargar productos de Firebase
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setFiltered(data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filtrar por búsqueda
  useEffect(() => {
    const result = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFiltered(result);
  }, [search, products]);

  const handleToggleStatus = async (product) => {
    const newStatus = !product.status;
    try {
      await updateProductStatus(product.id, newStatus);
      setProducts((prev) =>
        prev.map((p) =>
          p.id === product.id ? { ...p, status: newStatus } : p,
        ),
      );
    } catch (error) {
      alert("Error al actualizar estado: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "¿Seguro que deseas eliminar este producto? Esta acción no se puede deshacer.",
    );
    if (!confirm) return;
    try {
      await deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (error) {
      alert("Error al eliminar producto: " + error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="general-background py-5">
        <div className="philosophy-card container p-3 mt-5">
          <h1 className="mt-2 text-font text-center">GESTION DE PRODUCTOS</h1>
          <form className="mb-3 mt-4" onSubmit={(e) => e.preventDefault()}>
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
              <div className="input-group" style={{ maxWidth: "350px" }}>
                <span className="input-group-text">
                  <Search size={20} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar productos..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn custom-button"
                onClick={() => navigate("/add-product")}
              >
                <Plus size={20} /> AGREGAR PRODUCTO
              </button>
            </div>
          </form>

          {/* Lista de productos */}
          <div className="d-flex flex-column gap-3 mt-4">
            {loading && (
              <p className="text-font text-center">Cargando productos...</p>
            )}

            {!loading && filtered.length === 0 && (
              <p className="text-font text-center">
                No se encontraron productos.
              </p>
            )}

            {filtered.map((product, index) => (
              <div
                key={product.id}
                className="philosophy-card pt-3 pb-3 d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 w-100 ps-3 pe-3"
              >
                <div className="d-flex align-items-center gap-2">
                  <GripVertical size={40} className="text-font" />
                  <p className="text-font m-0 fs-3">{index + 1}</p>
                </div>

                <img
                  src={product.imageUrl || "https://via.placeholder.com/160"}
                  alt={product.name}
                  className="img-fluid rounded"
                  style={{
                    maxWidth: "160px",
                    width: "100%",
                    minWidth: "100px",
                  }}
                />

                <p
                  className="text-font fs-4 m-0 text-center text-lg-start"
                  style={{ minWidth: "150px" }}
                >
                  {product.name}
                </p>

                <button
                  className="btn custom-button"
                  onClick={() => navigate(`/edit-product/${product.id}`)}
                >
                  <Pencil size={20} />
                </button>

                <button
                  className="btn custom-button"
                  onClick={() => handleDelete(product.id)}
                >
                  <Trash2 size={20} />
                </button>

                <div className="d-flex align-items-center gap-3">
                  <input
                    className="form-check-input"
                    style={{ width: "28px", height: "28px", cursor: "pointer" }}
                    type="checkbox"
                    checked={product.status || false}
                    onChange={() => handleToggleStatus(product)}
                  />
                  <label
                    className="text-font fs-4"
                    style={{ cursor: "pointer" }}
                  >
                    Mostrar
                  </label>
                  {product.status ? (
                    <Eye size={35} className="text-font" />
                  ) : (
                    <EyeOff size={35} className="text-font" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
