import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const MyCraftList = () => {
  const artAndCraft = useLoaderData();
  const { user } = useContext(AuthContext);
  const myArtAndCraft = artAndCraft.filter(
    (data) => data.user_Email == user.email
  );

  const [crafts, setCrafts] = useState(myArtAndCraft);

  const [customization, setCustomization] = useState([]);

  const handleOptionClick = (value) => {
    const customizedData = myArtAndCraft.filter(
      (a) => a.customization == value
    );
    setCustomization(customizedData);
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://art-and-craft-store-server-one.vercel.app/artAndCraft/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft has been deleted.",
                icon: "success",
              });
              setCrafts((prevCrafts) =>
                prevCrafts.filter((craft) => craft._id !== id)
              );
            }
          });
      }
    });
  };
  return (
    <div className="min-h-[calc(100vh-339px)]">
      {/* <h2>My craft list{myArtAndCraft.length}</h2> */}
      <div className="container mx-auto">
        <p className="text-center font-bold text-4xl py-4">
          Hello {user.displayName}
        </p>
        <div className="flex flex-col md:flex-row items-center gap-1 ">
          <p>You can check the product by</p>
          <div className="dropdown dropdown-hover">
            <div role="button" className="btn m-1">
              Customization
            </div>
            <ul
              // tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={() => handleOptionClick("Yes")}>Yes</a>
              </li>
              <li>
                <a onClick={() => handleOptionClick("No")}>No</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
          {(customization.length > 0 ? customization : crafts).map((data) => {
            return (
              <div
                key={data.id}
                className="card bg-base-100 border-2 shadow-xl"
              >
                <figure>
                  <img src={data.image} alt="image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{data.item_name}</h2>
                  <div className="flex justify-between">
                    <p>Price : {data.price}</p>
                    <p>Rating : {data.rating}</p>
                    <p>Customization : {data.customization}</p>
                  </div>
                  <p>Stock Status : {data.stock_status}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/artAndCraft/${data._id}`}>
                      <button className="btn bg-blue-400 text-white">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="btn bg-red-700 text-white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCraftList;
