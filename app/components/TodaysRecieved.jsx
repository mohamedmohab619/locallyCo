"use client";

export default function TodaysRecieved() {
  const recievedData = {
    frstNum: "$24,800",
    secndNum: "$19,435.75",
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 w-full flex flex-col gap-5">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 opacity-80">
        Today’s Received
      </h2>

      {/* First Value Section */}
      <div className="flex flex-col gap-2 relative">
        <p className="text-2xl font-bold text-gray-900 tracking-tight">
          {recievedData.frstNum}
        </p>
        <span className="absolute right-0 top-0 translate-y-1/2 text-yellow-500 text-lg font-semibold">
          $
        </span>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-200 my-1" />

      {/* Second Section */}
      <h2 className="text-lg font-semibold text-gray-800 opacity-80">
        Received Forever
      </h2>

      <div className="flex flex-col gap-2 relative">
        <p className="text-2xl font-bold text-gray-900 tracking-tight">
          {recievedData.secndNum}
        </p>
        <span className="absolute right-0 top-0 translate-y-1/2 text-yellow-500 text-lg">
          📈
        </span>
      </div>
    </div>
  );
}
