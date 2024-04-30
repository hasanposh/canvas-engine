import { useLoaderData } from "react-router-dom";
import CategoryCards from "../components/CategoryCards";

const CategoryData = () => {
  const category = useLoaderData();

  return (
    <div>
      <h2 className="text-center text-5xl py-10">Total {category.length} products in this Category</h2>
      <div className="container mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
        {category.map((category) => (
          <CategoryCards category={category} key={category._id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryData;
