import { useState } from "react";
import CategoryCard from "../components/CategoryCard";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export async function loader() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log(data);
  return data;
}

function Home() {
  const apiProducts = useLoaderData();
  const [productData, setProductData] = useState(apiProducts);

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
        {/*product cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 pt-4">
          {productData.map((item, index) => (
            <div key={index} className="border hover:scale-105 duration-300 ">
              <img
                src={item.image}
                alt={item.title}
                className=" w-fit h-[200px] p-3 mx-auto	  rounded-t-lg"
              />
              <div className=" border-t-[1px] px-2 pb-0.5 py-3">
                <p className=" text-xs text-gray-400">{item.category}</p>
                <p className=" text-md font-bold">{item.title}</p>
              </div>
              <div className="flex items-center justify-start gap-2 px-2 py-2">
                <p className="text-red-500">
                  ${Math.round(item.price - item.price * 0.4)}
                </p>
                <p className=" text-gray-500 text-sm font-light line-through ">
                  ${item.price}
                </p>
              </div>
              <div className="flex px-2 pb-1  items-center mt-1 gap-1">
                <p className=" text-black rounded-full text-sm">
                  {item.rating.rate}
                </p>
                <FaStar size={13} />
                <p className="text-gray-400  text-xs">({item.rating.count})</p>
              </div>
              <div className="flex justify-between px-2 py-1 ">
                <p>view item</p>
                <p>add to cart</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
