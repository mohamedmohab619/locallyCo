import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Cart from "./Cart";
import Payments from "./Payments";
import { HiMiniShoppingCart } from "react-icons/hi2";
export default function Home() {

  //  bg-[linear-gradient(45deg,#070101_0%,#210906_50%,#320600_70%,#3a0700_80%,#420f06_90%,#411100_95%,#4b1400_100%)]  
  // gradient colors i will need it later
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {/* header */}
        <div className="p-5 h-28 flex items-center  w-full">
          <h3 className="text-4xl text-brown font-bold flex items-end">
            <span className="flex items-center gap-2">
              <HiMiniShoppingCart /> Cart
            </span>
            <span className="ml-2 text-sm">(3 times)</span>
          </h3>
        </div>
        {/* container */}
        <div className="flex gap-5 justify-center flex-wrap mt-5">
          {/* cart */}
          <Cart />
          {/* Payments */}
          <Payments />
        </div>
      </div>
      <Footer />
    </>
  );
}
