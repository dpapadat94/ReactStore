import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className="hidden bg-zinc-800 mx-auto md:flex justify-around items-center pt-8 p-4">
      <div className="  text-white flex-col">
        <h2 className=" font-bold">Customer Service</h2>
        <p className="font-thin mt-3">Contact us</p>
        <p className="font-thin">FAQ&apos;s</p>
        <p className="font-thin">Order Lookup</p>
      </div>
      <div className="text-white flex-col">
        <h2 className=" font-bold">In-Store</h2>
        <p className="font-thin mt-3">Locations</p>
        <p className="font-thin">Hours</p>
        <p className="font-thin">Pick up</p>
      </div>
      <div className="text-white flex-col">
        <h2 className=" font-bold">Careers</h2>
        <p className="font-thin mt-3">Openings</p>
        <p className="font-thin">Mission</p>
        <p className="font-thin">Questions</p>
      </div>
      <div className="text-white flex-col">
        <h2 className=" font-bold text-center mb-2">Connect</h2>
        <div className="flex gap-2">
          <FaTwitter size={25} />
          <FaInstagram size={25} />
          <FaFacebook size={25} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
