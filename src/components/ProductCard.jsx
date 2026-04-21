const ProductCard = ({ title, description, discount, image, width }) => {

    return (
        <div className="card m-3 p-3 shadow position-relative navbar-custom" style={{ width: width }}>

            {/* Badge descuento */}
            <span className="badge bg-success position-absolute top-0 end-0 m-2">
                {discount}
            </span>

            <div className="d-flex align-items-center">

                <div className="p-3 flex-grow-1">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>

                <img
                    src={image}
                    alt={title}
                    style={{
                        width: "260px",
                        height: "280px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        marginRight: "10px"
                    }}
                />

            </div>

        </div>
    )
}

export default ProductCard
/*const ProductCard = ({ title, description, discount, image }) => {
    return (
        <div className="card m-3 p-3 shadow" style={{width: "22rem"}}>
            <div className="position-relative">
                <img 
                    src={image} 
                    className="card-img-top" 
                    alt={title} 
                    style={{height: "200px", objectFit: "cover"}}
                />

                <span className="badge bg-success position-absolute top-0 end-0 m-2">
                    {discount}
                </span>

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                    {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard*/