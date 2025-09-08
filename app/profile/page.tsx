import Header from "../favourites/Header";
import Sidebar from "./Sidebar";
import ProfileInfo from "./ProfileInfo";

export default function Home(){
    return(
        <main>
            <Header/>
            <Sidebar/>
            <ProfileInfo/>
        </main>
    )
}