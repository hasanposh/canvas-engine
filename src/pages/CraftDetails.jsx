import { useLoaderData } from "react-router-dom";

const CraftDetails = () => {
  const craftItem = useLoaderData();
  console.log(craftItem);
  return (
    <div>
      <div className="card ">
        <figure className="px-10 pt-10">
          <img src={craftItem.image} alt="image" className="rounded-xl" />
        </figure>
        <div className="card-body text-2xl items-center text-center">
          <h2 className="card-title text-5xl">{craftItem.item_name}</h2>
          <p>Short Description : {craftItem.description}</p>
          <p>Category : {craftItem.subcategory_Name}</p>
          <div className="flex  gap-5 md:gap-10">
            <p>Price : {craftItem.price}$</p>
            <p>Rating : {craftItem.rating}</p>
            <p>Customization : {craftItem.customization}</p>
          </div>
          <div className="flex  gap-5 md:gap-10">
            <p>Stock Status : {craftItem.stock_status}</p>
            <p>Processing Time : {craftItem.processing_time}</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
            <p>Author : {craftItem.user_name}</p>
            <p>Author Email : {craftItem.user_Email}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
