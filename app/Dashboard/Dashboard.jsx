import BalanceCard from "../components/BalanceCard";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <BalanceCard title="Available Balance" amount="4,250" change={5.2} isHighlighted />
        <BalanceCard title="Pending Balance" amount="1,280" change={-1.1} />
        <BalanceCard title="Total Earnings" amount="9,780" change={3.4} />
      </div>
    </div>
  );
}
