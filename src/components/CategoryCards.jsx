import { Link } from "react-router-dom";
import PropTypes from "prop-types";



const CategoryCards = ({ category }) => {
  return (
    <div>
      <div className="card bg-base-100 border-2 shadow-xl">
        <figure>
          <img src={category.image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category.item_name}</h2>
          <p>Category : {category.subcategory_Name}</p>
          <p>Short Description : {category.description.slice(0,100)}...</p>
          <div className="flex justify-between">
            <p>Price : {category.price}</p>
            <p>Rating : {category.rating}</p>
          </div>
            <p>Processing Time : {category.processing_time}</p>
          
          <div className="card-actions justify-end">
            <Link to={`/artAndCraft/craftDetails/${category._id}`}>
              <button className="btn bg-blue-400 text-white">Details</button>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryCards.propTypes = {
    category: PropTypes.object,
  };
  

export default CategoryCards;

