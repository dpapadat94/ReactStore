import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";

function CartItem({ data }) {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="border hover:scale-105 shadow-lg lg:w-2/4 mx-auto duration-300 ">
      <div className="flex">
        <img
          src={data.image}
          alt={data.title}
          className="hidden md:flex w-[200px] h-[200px] p-3 mx-auto rounded-t-lg"
        />

        <div className="w-4/5">
          <div className=" border-t-[1px] px-2 pb-0.5 py-3">
            <Link to={`/individual/${data.id}`}>
              <p className=" text-xs text-gray-400">{data.category}</p>
              <p className=" text-md font-bold">{data.title}</p>
            </Link>
          </div>
          <div className="flex items-center justify-start gap-2 px-2 py-2">
            <p className="text-red-500">
              ${Math.round(data.price - data.price * 0.4)}
            </p>
            <p className=" text-gray-500 text-sm font-light line-through ">
              ${data.price}
            </p>
          </div>

          <div className="flex px-2 pb-1  items-center mt-1 gap-1">
            <p className=" text-black rounded-full text-sm">
              {data.rating.rate}
            </p>
            <FaStar size={13} />
            <p className="text-gray-400  text-xs">({data.rating.count})</p>
          </div>
          <div className="flex justify-center border border-black w-1/3 mx-auto mb-2 p-1">
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
        </div>
      </div>
    </div>
  );
}

export default CartItem;
