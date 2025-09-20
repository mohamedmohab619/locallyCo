import Header from "../favourites/Header";

import Sidebar from "../components/Sidebar";
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