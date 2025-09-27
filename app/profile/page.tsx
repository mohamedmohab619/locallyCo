import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import ProfileInfo from "./ProfileInfo";
import Footer from "../components/Footer";

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main layout (Sidebar + Content) */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 p-6">
          <ProfileInfo />
        </main>
      </div>

      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
}
