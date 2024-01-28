import { useState } from "react";
import CategoryCard from "../components/CategoryCard";
import { Link, useLoaderData } from "react-router-dom";
import Product from "../components/Product";

export async function loader() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return data;
}

function Home() {
  const apiProducts = useLoaderData();
  const [productData, setProductData] = useState(apiProducts);

  const typeFilter = (category) => {
    if (category === "all") {
      setProductData(apiProducts);
      return;
    } else {
      setProductData(
        apiProducts.filter((item) => {
          return item.category === category;
        })
      );
    }
  };

  return (
    <>
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px]  relative">
          <div className="absolute w-full h-full text-white max-h-[500px] bg-black/45 flex flex-col justify-center">
            <h2 className="px-8 text-2xl sm:text-4xl md:text-5xl lg:text-6xl ">
              Spring Sale
            </h2>
            <h1 className="px-8 pt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              40% off site wide
            </h1>

            <p className="pt-3 px-8 ">40% off sale ends 3/30 </p>
          </div>
          <img
            className=" w-full max-h-[500px] object-cover"
            src="https://images.pexels.com/photos/5947556/pexels-photo-5947556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        {/* //categoryCards// */}
        <h1 className="text-black font-bold text-4xl text-center mt-5">
          Shop by Category
        </h1>
        <CategoryCard />
      </div>
      <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1 className="text-black font-bold text-4xl text-center">
          Shop all Products
        </h1>
        {/* Filter Row */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Fliter Type */}
          <div>
            <p className="font-bold text-gray-700">Filter by Type</p>
            <div className="flex justfiy-between gap-1 lg:gap-3 flex-wrap">
              <button
                className="m-1 border border-black px-2 rounded-xl text-black hover:bg-gray-100 "
                onClick={() => typeFilter("all")}
              >
                All
              </button>
              <button
                className="m-1 border border-black px-2 rounded-xl text-black hover:bg-gray-100 "
                onClick={() => typeFilter("men's clothing")}
              >
                Men
              </button>
              <button
                className="m-1 border border-black px-2 rounded-xl text-black hover:bg-gray-100 "
                onClick={() => typeFilter("women's clothing")}
              >
                Woman
              </button>
              <button
                className="m-1 border border-black px-2 rounded-xl text-black hover:bg-gray-100 "
                onClick={() => typeFilter("electronics")}
              >
                Electronics
              </button>
              <button
                className="m-1 border border-black px-2 rounded-xl text-black hover:bg-gray-100 "
                onClick={() => typeFilter("jewelery")}
              >
                Jewlery
              </button>
            </div>
          </div>
        </div>
        {/*product cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 pt-4">
          {productData.map((product, index) => (
            <Product data={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
