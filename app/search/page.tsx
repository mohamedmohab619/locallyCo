// import Search from "./search";
import Navbar from "../components/NavBar";
import Filter from "./Filter";
import Sort from "./Sort";
import Footer from "../components/Footer";

export default function Page() {
  return (
      <>
         <Navbar />
         <div className="mt-4 flex flex-row justify-end gap-2 mx-3">
            <Sort />
            <Filter />
         </div>
         <Footer />
      </>
 ); 
}