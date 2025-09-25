// import Search from "./search";
import Navbar from "../components/NavBar";
import Filter from "./Filter";
import Sort from "./Sort";

export default function Page() {
  return (
      <>
         <Navbar />
         <div className="mt-4 flex flex-row justify-end gap-4">
            <Sort />
            <Filter />
         </div>
      </>
 ); 
}