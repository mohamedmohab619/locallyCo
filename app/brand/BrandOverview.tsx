import Image from "next/image";
import BrandImage from "./assets/Parkville-Brand-Image.webp";

export default function BrandOverview() {
  return (
    <section className="grid md:grid-cols-2 gap-10 mx-5 md:mx-20 mt-10">
      <div className="col-span-1 rounded-2xl order-2 md:order-1">
        <h2 className="text-2xl font-bold mb-10 text-brown">Brand Name</h2>
        <p className="text-center px-2">
          In the vibrant world of skincare and wellness, Parkville stands out as
          a pioneering Egyptian pharmaceutical firm dedicated to crafting
          innovative solutions for all your skincare needs. With a deep
          understanding of the diverse requirements of its customers, Parkville
          specializes in developing and distributing unique products designed to
          enhance your beauty and well-being. At the heart of Parkville&apos;s
          mission is a commitment to quality and effectiveness. The range of
          Parkville hair products is thoughtfully formulated to cater to various
          hair types and concerns, ensuring that everyone can find the perfect
          match for their individual needs.
        </p>
      </div>
      <div className="col-span-1 rounded-2xl order-1 md:order-2">
        <Image src={BrandImage} alt="brand img" className="rounded-2xl" />
      </div>
    </section>
  );
}
