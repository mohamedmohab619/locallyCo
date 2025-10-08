// import Search from "./search";
import Navbar from "../components/NavBar";
import Filter from "./Filter";
import Sort from "./Sort";
import Footer from "../components/Footer";
import Card from "../favourites/Card";
import "./search.css";

export default function Page() {
  return (
    <>
      <Navbar />
      {/* <div className="mt-4 w-full h-full flex flex-row gap-2 mx-3">
            <div className="justify-self-start">
               <aside
                  className="w-64 max-h-[80vh] overflow-y-auto bg-white border border-gray-200 
                  rounded-2xl">
                     <Filter />
               </aside>
            </div>
            <div className="h-full flex flex-col">

               <Sort />
               <Card />
               <div className="align-self-end">

                  <Footer />
               </div>
            </div>
         </div> */}
      <div className="grid grid-cols-5">
        <div className="md:col-span-1 md:flex hidden">
          <Filter />
        </div>
        <div className="md:col-span-4 col-span-5">
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
      <div>
        <Footer />
      </div>
    </>
  );
}
