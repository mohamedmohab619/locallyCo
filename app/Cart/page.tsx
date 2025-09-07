import Cart from "./Cart";
import Payments from "./Payments";

export default function Home() {
  return (
    <div className="container mx-auto bg-amber-950">
      {/* header */}
      <div className=" bg-blue-500 py-3">
        <h3 className="text-4xl">Cart<span className="text-[25px]">(3 times)</span></h3>
      </div>
        {/* container */}
        <div className="flex flex-col md:flex-row gap-5 p-5 justify-between">
        {/* cart */}
        <Cart />
        {/* Payments */}
        <Payments />
        </div>
    </div>
  );
}