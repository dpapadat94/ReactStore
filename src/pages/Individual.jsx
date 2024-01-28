import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";

export async function loader({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();
  console.log(data);
  window.scrollTo(0, 0);
  return data;
}

function Individual() {
  const item = useLoaderData();
  const { addToCart, cartItems, updateCartItemCount, removeFromCart } =
    useContext(ShopContext);
  const cartItemCount = cartItems[item.id];
  return (
    <div className="max-w-[1640px] h-screen mx-auto p-4">
      <div className=" grid grid-cols- mx-auto mt-12  ">
        <div className="  lg:flex mx-auto   lg:w-4/5  ">
          <img
            src={item.image}
            alt={item.title}
            className=" w-[200px] lg:h-fit lg:w-[300px] p-3 mx-auto rounded-t-lg"
          />
          <div className="ml-4 ">
            <div className=" px-2 pb-0.5 py-3">
              <p className=" text-sm text-gray-400">{item.category}</p>
              <p className=" text-xl lg:text-2xl font-bold">{item.title}</p>
            </div>
            <div className="flex items-center justify-start gap-2 px-2 py-2">
              <p className="text-red-500 text-xl">
                ${Math.round(item.price - item.price * 0.4)}
              </p>
              <p className=" text-gray-500 text-xl font-light line-through ">
                ${item.price}
              </p>
            </div>
            <div className="flex px-2 pb-1  items-center mt-1 gap-1">
              <p className=" text-black rounded-full text-xl">
                {item.rating.rate}
              </p>
              <FaStar size={13} />
              <p className="text-gray-400  text-l">({item.rating.count})</p>
            </div>
            <p className="text-md lg:text-l">{item.description}</p>
            {cartItemCount > 0 ? (
              <div className="flex justify-center items-start border border-black w-1/3  mb-2 p-1">
                <button
                  className=" px-3 rounded-full text-black text-xl"
                  onClick={() => removeFromCart(item.id)}
                >
                  -
                </button>
                <input
                  className="text-center w-[35px] text-xl "
                  value={cartItems[item.id]}
                  onChange={(e) =>
                    updateCartItemCount(Number(e.target.value), item.id)
                  }
                />
                <button
                  className=" px-3 text-xl rounded-full text-black"
                  onClick={() => addToCart(item.id)}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            ) : (
              <button
                className=" m-1 px-12 bg-red-700 rounded-md text-white p-1 border  "
                onClick={() => addToCart(item.id)}
              >
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Individual;
