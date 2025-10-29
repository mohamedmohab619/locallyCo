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
          <div className="col-span-1">
            <aside
              className="md:w-64 mt-15 overflow-y-auto bg-white border border-gray-200 
                          rounded-2xl sticky top-20 m-auto"
            >
              {/* <h2 className="text-xl m-4">Filter</h2> */}
              <Filter />
            </aside>
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
