export default function BalanceCard({
  title,
  amount,
  change,
  isHighlighted,
  currency = "$",
}) {
  const isPositive = change && change > 0;

  return (
    <div
      className={`rounded-2xl shadow-md transition-all duration-300 p-5 bg-white border 
      ${isHighlighted ? "border-blue-500 shadow-blue-100" : "border-gray-200"}`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <p
            className={`text-2xl font-semibold ${
              isHighlighted ? "text-blue-600" : "text-gray-800"
            }`}
          >
            {currency}
            {amount}
          </p>
        </div>

        {isHighlighted && (
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
        )}
        {!isHighlighted && title === "Pending Balance" && (
          <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>
        )}
      </div>

      {change !== undefined && (
        <p
          className={`mt-3 text-sm font-medium flex items-center ${
            isPositive ? "text-green-500" : "text-gray-400"
          }`}
        >
          {isPositive ? "↑" : "→"} {Math.abs(change)}%
        </p>
      )}
    </div>
  );
}
