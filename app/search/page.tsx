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
            <div className="col-span-1 bg-amber-100">
               <aside
                  className="md:w-64 mt-15 overflow-y-auto bg-white border border-gray-200 
                  rounded-2xl sticky top-20 m-auto">
                     <h2 className="text-xl m-4">Filter</h2>
                     <Filter />
               </aside>
            </div>
            <div className="col-span-4 bg-green-100">
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