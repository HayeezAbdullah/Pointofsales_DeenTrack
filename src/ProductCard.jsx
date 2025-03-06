import React from "react";
import { ShoppingCart } from "lucide-react"; // For cart icon

const ProductCard = ({ product_name, unit_price, onAdd }) => {
  return (
    <div
      className="p-4 bg-white shadow-lg rounded-xl cursor-pointer hover:bg-blue-50 transition-all duration-300 transform hover:scale-101"
      onClick={() => onAdd(product_name)}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {product_name}
          </h3>
          <p className="text-gray-600 text-sm">Rs. {unit_price}</p>
        </div>
        <button className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600">
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
