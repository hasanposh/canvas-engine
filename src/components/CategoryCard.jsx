import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryCard = ({ category }) => {
  return (
    <div>
      <Link to={`/categories/${category.subcategory_name}`} className="card bg-base-100 border-2 shadow-xl">
        <figure>
          <img src={category.image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category.subcategory_name}</h2>
        </div>
      </Link>
    </div>
  );
};

CategoryCard.propTypes = {
    category: PropTypes.object,
  };
  

export default CategoryCard;
