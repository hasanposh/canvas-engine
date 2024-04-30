import { Link, useLoaderData } from "react-router-dom";
import HomeSlider from "../components/HomeSlider";
import ProductCard from "../components/ProductCard";
import { FaLongArrowAltRight } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";

const Home = () => {
  const allProducts = useLoaderData();
  const [categoriesData, setCategoriesData] = useState([]);
  //   const categories = useLoaderData();
  const firstSixProducts = allProducts.slice(0, 6);
  useEffect(() => {
    fetch("https://art-and-craft-store-server-one.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategoriesData(data);
      });
  }, []);
  return (
    <div className="space-y-8">
      <HomeSlider></HomeSlider>
      <h3 className="text-5xl text-center">Check Our All Product</h3>
      <div className="container mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {firstSixProducts.map((product) => {
          return (
            <ProductCard key={product._id} product={product}></ProductCard>
          );
        })}
      </div>

      <div className="container mx-auto gap-2 flex text-xl justify-center items-center">
        <Link to={"/artAndCraft"}>Check Our All Product </Link>
        <FaLongArrowAltRight />
      </div>
      <div>
        <h2 className="text-5xl text-center my-5">Choose a category</h2>
        <div className="container mx-auto gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categoriesData.map((category) => (
          <CategoryCard category={category} key={category._id} />
        ))}

        </div>
      </div>
      <div className="container mx-auto ">
        <h2 className="text-5xl py-5 text-center">
          Meet With Our Most Selling <br /> Creative Authors
        </h2>
        <div className=" gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="object-cover">
              <img
                src={
                  "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Olivia Andrium</h2>
              <p>Watercolour Painter</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch Works</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="object-cover">
              <img
                src={
                  "https://images.pexels.com/photos/6507483/pexels-photo-6507483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Jemse Kemorun</h2>
              <p>Watercolour Painter</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch Works</button>
              </div>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="object-cover">
              <img
                src={
                  "https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Avi Pestarica</h2>
              <p className="">Watercolour Painter</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch Works</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
