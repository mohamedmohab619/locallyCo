"use client";

interface ButtonProps {
  onAddCard?: () => void; // optional callback
}

export default function Button({ onAddCard }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onAddCard}
      className="m-3 text-gray-900 bg-gradient-to-r from-lime-200 via-yellow-100 to-yellow-300 
                 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-50 
                 dark:focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 
                 text-center me-2 mb-2 cursor-pointer"
    >
      Add Item
    </button>
  );
}
