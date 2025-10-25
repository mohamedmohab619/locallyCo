"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useState } from "react";

export default function SalesChart() {
  const [activeFilter, setActiveFilter] = useState("All Time");

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
  const data = [15, 25, 18, 30, 22, 35, 28, 20, 25, 30];

  const chartData = months.map((month, i) => ({
    month,
    sales: data[i],
  }));

  const filters = ["All Time", "1 Month", "16 Days"];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 w-full max-w-3xl">
      {/* ===== Header ===== */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <div>
          <h3 className="text-sm font-semibold text-gray-500">Total Sales Activity</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">$24,800 USD</p>
        </div>

        <div className="flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border 
                ${
                  activeFilter === filter
                    ? "bg-white text-gray-900 border-gray-300"
                    : "bg-gray-100 text-gray-500 border-transparent hover:text-gray-900"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* ===== Chart Area ===== */}
      <div className="relative h-[370px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 10, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis dataKey="month" tick={{ fill: "#9CA3AF", fontSize: 12 }} />
            <YAxis tick={{ fill: "#9CA3AF", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                fontSize: "13px",
              }}
              cursor={{ fill: "rgba(0,0,0,0.04)" }}
            />
            <Bar
              dataKey="sales"
              fill="url(#barGradient)"
              radius={[6, 6, 0, 0]}
              animationDuration={700}
            />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fde047" />
                <stop offset="100%" stopColor="#facc15" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>

        <div className="absolute top-5 right-10 bg-yellow-300 px-3 py-1.5 rounded-lg text-sm font-bold text-gray-800 shadow-md">
          $26,800
        </div>
      </div>

      {/* ===== View Report Button ===== */}
      <button className="mt-5 text-blue-600 font-semibold hover:underline">
        View Report
      </button>
    </div>
  );
}
