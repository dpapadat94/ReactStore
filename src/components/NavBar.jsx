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
    <div className="max-w-[1640px] border-b-[1px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            React <span className="font-bold ">Store</span>
          </h1>
        </Link>
      </div>

      {/* Search Input */}
      <div className="text-md">
        <ul className=" hidden md:flex justify-center gap-10">
          <Link to="/mens" className="hover:cursor-pointer">
            Mens
          </Link>
          <Link to="/womans" className="hover:cursor-pointer">
            Womans
          </Link>
          <Link to="/electronics" className="hover:cursor-pointer">
            Electronics
          </Link>
          <Link to="/jewelery" className="hover:cursor-pointer">
            Jewelery
          </Link>
          <Link to="/" className="hover:cursor-pointer">
            Home
          </Link>
        </ul>
      </div>
      {/* Cart button */}
      <Link
        to="cart"
        className="bg-white p-2 border border-black text-black hidden md:flex items-center py-2 rounded-full"
      >
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </Link>

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
            <Link to="cart" className="text-xl py-4 flex">
              <BsFillCartFill size={25} className="mr-4" /> Cart
            </Link>
            <Link to="mens" className="text-xl py-4 flex">
              <FaTshirt size={25} className="mr-4" /> Mens Clothing
            </Link>
            <Link to="womans" className="text-xl py-4 flex">
              <GiLargeDress size={25} className="mr-4" /> Womans Clothing
            </Link>

            <Link to="electronics" className="text-xl py-4 flex">
              <RiComputerLine size={25} className="mr-4" />
              Electronics
            </Link>
            <Link to="jewelery" className="text-xl py-4 flex">
              <FiWatch size={25} className="mr-4" /> Jewelery
            </Link>
            <Link to="/" className="text-xl py-4 flex">
              <FaHome size={25} className="mr-4" /> Home
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
