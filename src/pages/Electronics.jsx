import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import Product from "../components/Product";

export async function loader() {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/electronics`
  );
  const data = await res.json();
  console.log(data);
  return data;
}

function Electronics() {
  const electProducts = useLoaderData();
  const [electData, setElectData] = useState(electProducts);

  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[250px]  relative">
        <div className="absolute w-full h-full text-white max-h-[250px] bg-black/45 flex flex-col justify-center">
          <h1 className="px-8 pt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Shop Below
          </h1>

          <p className="pt-3 px-8 ">40% off. Ends 3/30 </p>
        </div>
        <img
          className=" w-full max-h-[250px] object-cover"
          src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <h1 className="text-black font-bold text-4xl my-5 text-center">
        {electData[0].category.toUpperCase()}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 pt-4">
        {electData.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
}

export default Electronics;
