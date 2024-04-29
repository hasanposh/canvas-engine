import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";

const UpdateCraftItem = () => {
  const updateCraft = useLoaderData();
  console.log(updateCraft);
  const {
    _id,
    image,
    item_name,

    subcategory_Name,
    rating,
    customization,
    description,
    stock_status,
    processing_time,
    price,
  } = updateCraft;
  const hadleUpdateCraftItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const item_name = form.item_name.value;

    const subcategory_Name = form.subcategory_Name.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const description = form.description.value;
    const stock_status = form.stock_status.value;
    const processing_time = form.processing_time.value;
    const price = form.price.value;

    const updateCraft = {
      image,
      item_name,

      subcategory_Name,
      rating,
      customization,
      description,
      stock_status,
      processing_time,
      price,
    };

    console.log(updateCraft);

    fetch(`http://localhost:5000/artAndCraft/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast("Craft Updated successfully");
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
      
  };
  return (
    <div className="text-center w-full md:p-24 p-10 space-y-10 ">
      <h2 className="text-5xl font-bold">Update Your Craft Item</h2>
      <form onSubmit={hadleUpdateCraftItem}>
        <label className="input input-bordered bg-white text-black flex-1 flex items-center mb-6">
          Image URL
          <input
            className="ml-2 w-2/3"
            type="text"
            name="image"
            placeholder="Enter Photo URL"
            defaultValue={image}
          />
        </label>
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 mb-6 ">
          <label className="input input-bordered flex-1 bg-white text-black flex w-full items-center gap-2">
            Item Name
            <input
              defaultValue={item_name}
              type="text"
              name="item_name"
              placeholder="Enter Item Name"
            />
          </label>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 mb-6 w-full">
          <label className="input input-bordered bg-white text-black w-full flex items-center gap-2">
            Subcategory Name
            <div className="relative">
              <select
                className="appearance-none border-none  py-2 px-4 bg-white leading-tight focus:outline-none focus:border-blue-500"
                name="subcategory_Name"
                defaultValue={subcategory_Name}
              >
                <option value="Landscape Painting">Landscape Painting</option>
                <option value="Portrait Drawing">Portrait Drawing</option>
                <option value="Watercolour Painting">
                  Watercolour Painting
                </option>
                <option value="Oil Painting">Oil Painting</option>
                <option value="Charcoal Sketching">Charcoal Sketching</option>
                <option value="Cartoon Drawing">Cartoon Drawing</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 7l5 5 5-5z" />
                </svg>
              </div>
            </div>
          </label>
          <label className="input input-bordered bg-white text-black flex-1 flex items-center gap-2">
            Rating
            <input
              defaultValue={rating}
              type="text"
              name="rating"
              placeholder="Enter Your Rating"
            />
          </label>

          <label className="input input-bordered flex-1 bg-white text-black flex items-center gap-2">
            Customization
            <div className="relative">
              <select
                className="appearance-none border-none py-2 px-4 bg-white leading-tight focus:outline-none focus:border-blue-500"
                name="customization"
                defaultValue={customization}
              >
                <option value="Yes">Yes </option>
                <option value="No">No </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 -right-3 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 7l5 5 5-5z" />
                </svg>
              </div>
            </div>
          </label>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 mb-6 w-full">
          <label className="input input-bordered bg-white text-black flex w-full items-center gap-2">
            Short description
            <input
              type="text"
              name="description"
              placeholder="Enter a short description"
              defaultValue={description}
            />
          </label>
          <label className="input input-bordered flex-1 bg-white text-black  flex items-center gap-2">
            Stock Status
            <div className="relative">
              <select
                className="appearance-none border-none  py-2 px-4 bg-white leading-tight focus:outline-none focus:border-blue-500"
                name="stock_status"
                defaultValue={stock_status}
              >
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 7l5 5 5-5z" />
                </svg>
              </div>
            </div>
          </label>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 mb-6 w-full">
          <label className="input input-bordered bg-white text-black flex w-full items-center gap-2">
            Processing Time
            <input
              type="text"
              name="processing_time"
              placeholder="Enter processing time"
              defaultValue={processing_time}
            />
          </label>
          <label className="input input-bordered bg-white text-black flex w-full items-center gap-2">
            Price
            <input
              type="text"
              name="price"
              placeholder="Enter the price"
              defaultValue={price}
            />
          </label>
        </div>

        <input
          type="submit"
          className="btn bg-blue-400 text-white mt-10 btn-block"
          value="Updtae Craft Item"
        />
      </form>
    </div>
  );
};

export default UpdateCraftItem;
