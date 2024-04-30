import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div key={product._id} className="card bg-base-100 border-2 shadow-xl">
        <figure>
          <img src={product.image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.item_name}</h2>
          <div className="flex justify-between">
            <p>Price : {product.price}</p>
            <p>Rating : {product.rating}</p>
            <p>Customization : {product.customization}</p>
          </div>
          <p>Stock Status : {product.stock_status}</p>
          <div className="card-actions justify-end">
            <Link to={`/artAndCraft/craftDetails/${product._id}`}>
              <button className="btn bg-blue-400 text-white">Details</button>
            </Link>
            {/* <button
                      onClick={() => handleDelete(data._id)}
                      className="btn bg-red-700 text-white"
                    >
                      Delete
                    </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
