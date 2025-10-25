export default function Navigation({ activeTab, setActiveTab }) {
  const tabs = ["Overview", "Clients", "Account", "Payments"];

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white border-b border-gray-200">
      {/* Tabs Section */}
      <div className="flex gap-5 items-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-semibold transition-colors border-b-2 
              ${
                activeTab === tab
                  ? "text-gray-900 border-gray-900"
                  : "text-gray-500 border-transparent hover:text-gray-900"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Manage Button */}
      <button className="text-sm font-semibold text-gray-500 hover:text-gray-900 underline">
        Manage
      </button>
    </div>
  );
}
