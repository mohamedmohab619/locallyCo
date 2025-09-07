import "./Payments.css"; 


export default function Payments() {
    return (
        <div>
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm p-10 space-y-4 dark:bg-gray-800 dark:border-gray-700">
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
        Order Summary
      </h2>

      {/* Coupon Code */}
      <div className="flex">
        <input
          type="text"
          placeholder="Coupon Code"
          className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-r-md hover:bg-blue-700">
          APPLY
        </button>
      </div>

      {/* Offers */}
      <button className="flex items-center justify-between w-full px-3 py-2 text-sm text-blue-600 border border-gray-200 rounded-md hover:bg-gray-50">
        <span>View Available Offers</span>
        <span>›</span>
      </button>

      {/* Price Details */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal (3 items)</span>
          <span className="text-gray-900 font-medium">EGP 13455.20</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping Fee</span>
          <span className="text-green-600 font-semibold">FREE</span>
        </div>
      </div>

      <hr />

      {/* Total */}
      <div className="flex justify-between text-base font-semibold">
        <span>Total (Inclusive of VAT)</span>
        <span className="text-gray-900">EGP 13455.20</span>
      </div>

      {/* Payment Plan */}
      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md text-sm">
        Monthly payment plans from EGP 500.{" "}
        <a href="#" className="text-blue-600 font-medium hover:underline">
          View more details
        </a>
      </div>

      {/* Checkout Button */}
      <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
        CHECKOUT
      </button>
    </div>
        </div>
    );

}
