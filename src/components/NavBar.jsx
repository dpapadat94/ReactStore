import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FiWatch } from "react-icons/fi";

import { GiLargeDress } from "react-icons/gi";
import { FaHome, FaTshirt } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          React <span className="font-bold ">Store</span>
        </h1>
      </div>

      {/* Search Input */}
      <div className="text-md">
        <ul className=" hidden md:flex justify-center gap-10">
          <Link to="/mens" className="hover:cursor-pointer">
            Mens
          </Link>
          <li className="hover:cursor-pointer">Womans</li>
          <li className="hover:cursor-pointer">Electronics</li>
          <li className="hover:cursor-pointer">Jewlery</li>
        </ul>
      </div>
      {/* Cart button */}
      <button className="bg-red-400 text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          React <span className="font-bold">Store</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <BsFillCartFill size={25} className="mr-4" /> Cart
            </li>
            <Link to="mens" className="text-xl py-4 flex">
              <FaTshirt size={25} className="mr-4" /> Mens Clothing
            </Link>
            <li className="text-xl py-4 flex">
              <GiLargeDress size={25} className="mr-4" /> Womans Clothing
            </li>

            <li className="text-xl py-4 flex">
              <RiComputerLine size={25} className="mr-4" />
              Electronics
            </li>
            <li className="text-xl py-4 flex">
              <FiWatch size={25} className="mr-4" /> Jewlery
            </li>
            <li className="text-xl py-4 flex">
              <FaHome size={25} className="mr-4" /> Home
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
