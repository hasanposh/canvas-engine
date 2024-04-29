import { Link, useLoaderData } from "react-router-dom";

const AllArtAndCraftItems = () => {
  const artAndCraft = useLoaderData();
  console.log(artAndCraft);
  return (
    <div>
      {/* <h3>all art and craft item {artAndCraft.length}</h3> */}
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Product</th>
                <th className="p-3">Author</th>
                <th className="p-3">Processing time</th>
                <th className="p-3">Customization</th>
                <th className="p-3">Rating</th>
                <th className="p-3 text-right">Price</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            {artAndCraft.map((item) => (
              <tbody key={item.id}>
                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                  <td className="p-3 w-1/5">
                    <img src={item.image} alt="" />
                    <p className="py-2">
                      Name :{" "}
                      <span className="font-bold ">{item.item_name}</span>
                    </p>
                  </td>
                  <td className="p-3">
                    <p>{item.user_name}</p>
                  </td>
                  <td className="p-3">
                    <p>{item.processing_time}</p>
                  </td>
                  <td className="p-3">
                    <p>{item.customization}</p>
                  </td>
                  <td className="p-3">
                    <p>{item.rating}</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>{item.price} $</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-blue-400 dark:text-gray-50">
                      <Link to={`/artAndCraft/${item._id}`}>
                        Details
                      </Link>
                    </span>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllArtAndCraftItems;
