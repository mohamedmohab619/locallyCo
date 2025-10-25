import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import ProfileInfo from "./ProfileInfo";
import Footer from "../components/Footer";

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#D4AF37] via-[#E0C097] to-[#0F4C75]">
      {/* Navbar at top */}
      <Navbar />

      {/* Middle area: sidebar + content */}
      <div className="flex flex-1">
        {/* Sidebar (left) */}
        <div className="shrink-0 ">
          <Sidebar  />
        </div>

        {/* Main content (right) */}
        <main className="flex-1 p-6 overflow-y-auto">
          <ProfileInfo />
        </main>
      </div>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}
