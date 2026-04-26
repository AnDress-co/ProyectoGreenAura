import { Link } from "react-router-dom"
//Lo que recibe los productos (Dependiendo de los que crees)
const ProductCard = ({ title, description, discount, image, width, link }) => {
  return (
    <Link to={link} className="product-link">
      <div
        className="card product-card m-2 p-3 shadow position-relative navbar-custom"
        style={{ width: width }}
      >
        {/* Badge descuento */}
        <span className="badge bg-danger position-absolute top-0 end-0 m-2 fs-5">
          {discount}
        </span>

        <div className="d-flex flex-column flex-lg-row align-items-center gap-3">
          <div className="p-2 flex-grow-1 text-center text-lg-start order-2 order-lg-1">
            <h5>{title}</h5>
            <p className="mb-0">{description}</p>
          </div>

          <img
            src={image}
            alt={title}
            className="product-card-img order-1 order-lg-2"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
