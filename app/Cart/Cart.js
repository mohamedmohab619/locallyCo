import "./Cart.css";
import Image from "next/image";
import { BsTrash3Fill } from "react-icons/bs";

const products = [
  {
    id: 1,
    name: "KENWOOD Digital Air Fryer, 2.4Kg, Rapid Hot Air Circulation, 5.5 L 1800 W HFP50.000BK Black",
    price: 4333,
    oldPrice: 8500,
    discount: "49% OFF",
    seller: "ELOGAIL",
    delivery: "Get it by Tue, Sep 9",
    badges: ["Prepaid only"],
    image: "/shoes.jpg",
  },
  {
    id: 2,
    name: "KENWOOD Digital Air Fryer, 2.8Kg, Rapid Hot Air Circulation, 7 L 1800 W HFP80.000BK Black",
    price: 5678.2,
    seller: "zakaria sons",
    delivery: "Get it Tomorrow",
    badges: ["express", "Free Delivery"],
    image: "/shoes.jpg",
  },
  {
    id: 3,
    name: "Philips Essential Air Fryer With Rapid Air Technology 4.1 L 1400 W HD9200/91/90 Black",
    price: 3444,
    oldPrice: 7999,
    discount: "56% OFF",
    seller: "Best Electronic",
    delivery: "Get it Tomorrow",
    image: "/shoes.jpg",
  },
];

export default function Cart() {
  const styleBtn =
    "bg-brown px-3 py-1 text-beige text-sm font-bold cursor-pointer hover:bg-dark-brown duration-300";
  return (
    <div className=" xl:w-[50%]">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full xl:h-48 my-1 flex  gap-3 items-center justify-between flex-wrap md:flex-nowrap rounded-lg bg-beige"
        >
          {/* Left: Image */}
          <div className=" md:w-48 w-full h-42">
            <Image
              src={product.image}
              alt={product.name}
              width={120}
              height={120}
              className="object-cover w-full h-42 rounded-md mx-2"
            />
          </div>

          {/* Middle: Details */}

          <div className="px-3 py-5">
            <div className="flex justify-between">
              <div className="w-[60%]">
                <h5 className="text-sm font-bold text-dark-brown">
                  {product.name}
                </h5>
                <p className="text-sm text-brown my-2 font-medium">
                  {product.delivery}
                </p>
                <p className="text-xs text-dark-gray">
                  Sold by
                  <span className="font-semibold">{product.seller}</span>
                </p>
              </div>

              <div>
                {/* Remove button */}
                <button className="mt-2 flex justify-end-safe gap-1 px-3 py-1 text-xl text-brown cursor-pointer duration-300 font-bold hover:text-dark-brown">
                  <BsTrash3Fill />
                </button>
              </div>

              {/* Qty selector */}
            </div>
            <div className="flex justify-between items-center flex-wrap">
              <div className="flex items-center gap-2 my-2">
                <p className="text-xl font-bold text-dark-brown"> LE 200 </p>
                <div className="text-xs">
                  <p className="text-light-gray line-through"> LE 300 </p>
                  <p className="text-green-600"> 10% off </p>
                </div>
              </div>

              <div>
                <form className="flex">
                  <button className={styleBtn}> - </button>
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    className="border-1 border-brown w-16 px-3 outline-none"
                  />
                  <button className={styleBtn}> + </button>
                </form>
              </div>
            </div>
            {/* Badges */}
            {product.badges && (
              <div className="flex flex-wrap gap-2">
                {product.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs font-semibold text-beige bg-light-gray/70 rounded"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
