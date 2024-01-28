import { IoBagCheckOutline } from "react-icons/io5";

function Checkout() {
  return (
    <div className="min-h-screen flex justify-center items-start">
      <div className="flex mt-10 flex-col gap-4 items-center">
        <IoBagCheckOutline size={50} />
        <h1 className="text-5xl font-bold">Thank you for your order!</h1>
        <p className="text-xl">
          A confirmation email will been sent out shortly.
        </p>
        <p className="text-xl">
          Order tracking information will be sent when your order has finished
          processing.
        </p>
      </div>
    </div>
  );
}

export default Checkout;
