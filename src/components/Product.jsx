import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import { ShopContext } from "../context/shop-context";
import { useContext } from "react";

function Product({ data }) {
  const { addToCart, cartItems, updateCartItemCount, removeFromCart } =
    useContext(ShopContext);
  const cartItemCount = cartItems[data.id];
  return (
    <div className="border hover:scale-105 shadow-lg  duration-300 ">
      <Link to={`/individual/${data.id}`}>
        <p className="text-black font-thin text-sm p-3">
          Click for product detail
        </p>
        <img
          src={data.image}
          alt={data.title}
          className=" z-10 w-[200px] h-[200px] p-3 mx-auto rounded-t-lg "
        />

        <div className=" border-t-[1px] px-2 pb-0.5 py-3">
          <p className=" text-xs text-gray-400">{data.category}</p>
          <p className=" text-md font-bold">{data.title}</p>
        </div>
        <div className="flex items-center justify-start gap-2 px-2 ">
          <p className="text-red-500">
            ${Math.round(data.price - data.price * 0.4)}
          </p>
          <p className=" text-gray-500 text-sm font-light line-through ">
            ${data.price}
          </p>
        </div>
        <div className="flex px-2 pb-1  items-center mt-1 gap-1">
          <p className=" text-black rounded-full text-sm">{data.rating.rate}</p>
          <FaStar size={13} />
          <p className="text-gray-400  text-xs">({data.rating.count})</p>
        </div>
      </Link>
      <div className="flex flex-col items-center  px-2 py-1 ">
        {cartItemCount > 0 ? (
          <div className="flex justify-center items-start border border-black w-2/4  mb-2 p-1">
            <button
              className=" px-3 rounded-full text-black text-xl"
              onClick={() => removeFromCart(data.id)}
            >
              -
            </button>
            <input
              className="text-center w-[35px] text-xl "
              value={cartItems[data.id]}
              onChange={(e) =>
                updateCartItemCount(Number(e.target.value), data.id)
              }
            />
            <button
              className=" px-3 text-xl rounded-full text-black"
              onClick={() => addToCart(data.id)}
            >
              {" "}
              +{" "}
            </button>
          </div>
        ) : (
          <button
            className=" m-1 px-12 bg-red-700 rounded-md text-white p-1 border  "
            onClick={() => addToCart(data.id)}
          >
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
