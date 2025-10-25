"use client";

import { useState } from "react";
import TodaysRecieved from "../components/TodaysRecieved";
import TopSellingProductsTable from "../components/TopSellingProductsTable";
import TopSellingProducts from "../components/TopSellingProducts";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import BalanceCard from "../components/BalanceCard";
import PaymentWidget from "../components/PaymentWidget";
import SalesChart from "../components/SalesChart";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navbar */}
      <Navbar />

      {/* Navigation Tabs */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Dashboard Main Layout */}
      <main className="flex-1 p-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10">
          {/* ===== Left Section (Main Content) ===== */}
          <div>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h1>

            {/* Balance Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <BalanceCard
                title="Available Balance"
                amount="4,250"
                change={5.2}
                isHighlighted
              />
              <BalanceCard title="Pending Balance" amount="1,280" change={-1.1} />
              <BalanceCard title="Total Earnings" amount="9,780" change={3.4} />
            </div>

            {/* Active Tab Content */}
            <div className="mt-10">
              {activeTab === "Overview" && (
                <p className="text-gray-600">Overview section content here.</p>
              )}
              {activeTab === "Clients" && (
                <p className="text-gray-600">Clients management content here.</p>
              )}
              {activeTab === "Account" && (
                <p className="text-gray-600">Account settings content here.</p>
              )}
              {activeTab === "Payments" && (
                <p className="text-gray-600">Payments and billing details here.</p>
              )}
            </div>

            {/* Sales Chart */}
            <div className="mt-10">
              <SalesChart />
            </div>
          </div>

   <div className="flex flex-col items-end gap-8 self-start">
  <div className="w-full max-w-xs">
    <PaymentWidget />
  </div>
  <div className="w-full">
    <TopSellingProducts />
  </div>
  <div className="mt-10">
  <TopSellingProductsTable />
</div>
 <TodaysRecieved />
</div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
