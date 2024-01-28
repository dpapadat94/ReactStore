import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

import CartItem from "./CartItem";

export async function loader() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  window.scrollTo(0, 0);

  return data;
}

function Cart() {
  const cartProducts = useLoaderData();
  const { cartItems, checkout } = useContext(ShopContext);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = cartProducts.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  const total = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="h-fit min-h-screen max-w-[1640px] p-4">
      <div className="cart">
        <h1 className="text-center m-1 mb-5 border-b-2 pb-2  text-3xl font-bold">
          My Cart: ${Math.round(total * 100) / 100}
        </h1>

        {cartProducts.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {total > 0 ? (
        <div className="flex flex-col items-center gap-2">
          <p className="mt-2 font-bold text-3xl">
            {" "}
            Total: ${Math.round(total * 100) / 100}
          </p>
          <div className="flex gap-2">
            <button
              className="p-2 border border-black "
              onClick={() => navigate("/")}
            >
              {" "}
              Continue Shopping{" "}
            </button>
            <button
              className=" px-10 border bg-black text-white"
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              {" "}
              Place Order{" "}
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-3xl"> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
}

export default Cart;
