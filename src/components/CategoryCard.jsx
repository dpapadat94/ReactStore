import { Link } from "react-router-dom";

function CategoryCard() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 pt-3 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/35 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Mens Clothing</p>
          <p className="px-2">up to 40% off</p>
          <Link
            to="mens"
            className=" text-black p-2 bg-white rounded-full mx-2 absolute bottom-4"
          >
            Shop Now
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="src/images/menspic.jpg"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Womans Clothing</p>
          <p className="px-2">up to 40% off</p>
          <Link
            to="/womans"
            className=" text-black p-2 bg-white rounded-full mx-2 absolute bottom-4"
          >
            Shop Now
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="src/images/womanspic.jpg"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Electronics</p>
          <p className="px-2">Restock is live!</p>
          <Link
            to="electronics"
            className=" text-black p-2 bg-white rounded-full mx-2 absolute bottom-4"
          >
            Shop Now
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="src/images/electronicspic.jpg"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Jewlery</p>
          <p className="px-2">New Collections available</p>
          <Link
            to="jewelery"
            className=" text-black p-2 bg-white rounded-full mx-2 absolute bottom-4"
          >
            Shop Now
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="src/images/jewelerypic.jpg"
          alt="/"
        />
      </div>
    </div>
  );
}

export default CategoryCard;
