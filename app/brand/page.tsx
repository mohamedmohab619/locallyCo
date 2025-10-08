import Navbar from "../components/NavBar";
import BrandOverview from "./BrandOverview";
import Footer from "../components/Footer";
import Filter from "../search/Filter";
import Sort from "../search/Sort";
import Card from "../favourites/Card";

export default function Brand() {
  return (
    <>
      <Navbar />
      <BrandOverview />
      <section className="mt-10 mx-10">
        <div className="grid grid-cols-5">
          <div className="md:col-span-1 md:flex hidden">
            <Filter />
          </div>
          <div className="col-span-4">
            <div className="text-right">
              <Sort />
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-3 gap-2 w-full">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
