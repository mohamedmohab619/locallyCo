import "./Cart.css"; 
import Image from "next/image";


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
    image: "/Locally-BGPattern.jpg",
  },
  {
    id: 2,
    name: "KENWOOD Digital Air Fryer, 2.8Kg, Rapid Hot Air Circulation, 7 L 1800 W HFP80.000BK Black",
    price: 5678.2,
    seller: "zakaria sons",
    delivery: "Get it Tomorrow",
    badges: ["express", "Free Delivery"],
    image: "/Locally-BGPattern.jpg",
  },
  {
    id: 3,
    name: "Philips Essential Air Fryer With Rapid Air Technology 4.1 L 1400 W HD9200/91/90 Black",
    price: 3444,
    oldPrice: 7999,
    discount: "56% OFF",
    seller: "Best Electronic",
    delivery: "Get it Tomorrow",
    image: "/Locally-BGPattern.jpg",
  },
];

export default function Cart() {
  return (
     <div className="space-y-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow-sm p-4 dark:bg-gray-800 dark:border-gray-700"
        >
          {/* Left: Image */}
          <Image
            src={product.image}
            alt={product.name}
            width={120}
            height={120}
            className="object-contain w-32 h-32 rounded-md"
          />

          {/* Middle: Details */}
          <div className="flex-1 px-4">
            <h5 className="text-sm font-semibold text-gray-900 dark:text-white">
              {product.name}
            </h5>
            <p className="text-xs text-green-600 font-medium">{product.delivery}</p>
            <p className="text-xs text-gray-600">
              Sold by <span className="font-semibold">{product.seller}</span>
            </p>

            {/* Remove button */}
            <button className="mt-2 flex items-center px-3 py-1 text-xs font-medium border border-gray-300 rounded-md hover:bg-gray-100">
              Remove
            </button>
          </div>

          {/* Right: Price + Badges + Qty */}
          <div className="flex flex-col items-end space-y-2">
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                EGP {product.price}
              </p>
              {product.oldPrice && (
                <p className="text-xs line-through text-gray-400">
                  EGP {product.oldPrice}
                </p>
              )}
              {product.discount && (
                <span className="text-xs font-semibold text-green-600">
                  {product.discount}
                </span>
              )}
            </div>

            {/* Badges */}
            {product.badges && (
              <div className="flex flex-wrap gap-2 justify-end">
                {product.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs font-semibold text-yellow-700 bg-yellow-300 rounded"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            {/* Qty selector */}
            <div className="flex items-center space-x-1 text-sm">
              <span className="text-gray-500">Qty</span>
              <select className="border rounded-md px-2 py-1 text-sm">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}