import Image from "next/image";

const categories = [
  {
    name: "Shoes",
    image: "/shoes.jpg",
    textPos: "left-0 top-1/2 -translate-y-1/2 -rotate-90",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
    height: "h-[500px]", // tall
  },
  {
    name: "Hoodies",
    image: "/hoodie.jpg",
    textPos: "top-4 left-4",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    height: "h-[240px]",
  },
  {
    name: "Shorts",
    image: "/shorts2.jpg",
    textPos: "top-4 right-4",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    height: "h-[240px]",
  },
  {
    name: "Pants",
    image: "/pants3.jpg",
    textPos: "bottom-4 left-4",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
    height: "h-[240px]", // wide
  },
  {
    name: "T-Shirts",
    image: "/tshirt7.jpg",
    textPos: "top-4 left-4",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
    height: "h-[240px]", // wide
  },
  {
    name: "Shirt",
    image: "/shirt.jpg",
    textPos: "bottom-4 right-4",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    height: "h-[240px]",
  }
];

export default function Categories() {
  return (
        <section className="py-12 bg-[#E9EAEB]">
                <div className="container mx-auto">
                    
            <h2 className="text-4xl font-extrabold text-center mb-10 w-fit mx-auto relative bg-amber-700">
        Categories
        <span className="block w-16 h-1 bg-gradient-to-r from-amber-400 to-pink-500 rounded-full mx-auto mt-2"></span>
        </h2>
        

    <div className="grid grid-cols-3 grid-rows-2 gap-6">
      {categories.map((cat, i) => (
        <div
          key={i}
          className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group transition duration-500 ${cat.colSpan} ${cat.rowSpan} ${cat.height} hover:shadow-[0_0_25px_5px_rgba(105,105,105,0.6)]`}
        >
          {/* Image with zoom effect */}
          <Image
            src={cat.image}
            alt={cat.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Text with slide-up animation */}
          <h3
            className={`absolute text-white text-3xl font-bold drop-shadow-lg transition-all duration-500 transform group-hover:-translate-y-2 ${cat.textPos}`}
          >
            {cat.name}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>


  );
}
