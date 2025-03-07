import React, { useState } from "react";
import { FaPlus, FaMinus, FaCalculator } from "react-icons/fa";
import InvoiceRow from "./InvoiceRow";

const InvoiceComponent = () => {
  const [finaltotal, setFinaltotal] = useState();
  const [totals, setTotals] = useState([]);
  const [products, setProducts] = useState([
    { productName: "Kottu Mee", unitPrice: 130, quantity: 3 },
  ]);

  const handleTotalChange = (total, index) => {
    const updatedTotals = [...totals];
    updatedTotals[index] = total; // Update the specific index with the new total
    setTotals(updatedTotals);
  };

  const addProduct = () => {
    setProducts([...products, { productName: "", unitPrice: 0, quantity: 1 }]);
  };
  const removeProduct = () => {
    if (products.length > 1) {
      setProducts(products.slice(0, -1)); // Remove the last product
    } else {
      console.log("At least one product should be present!");
    }
  };

  const calculateGrossTotal = () => {
    const grossTotal = totals.reduce((acc, curr) => acc + (curr || 0), 0);
    console.log("Gross Total:", grossTotal);
    setFinaltotal(grossTotal);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="border-2 border-gray-300 p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Invoice</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Product Name</th>
                <th className="px-4 py-2 border-b">Unit Price</th>
                <th className="px-4 py-2 border-b">Quantity</th>
                <th className="px-4 py-2 border-b">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <InvoiceRow
                  key={index}
                  onTotalChange={(total) => handleTotalChange(total, index)}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-6">
          <div className="font-bold text-xl">
            <span>Total: </span>
            <span>{finaltotal}</span>
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={calculateGrossTotal}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 shadow-md transition-all duration-300"
          >
            <FaCalculator className="text-yellow-600" /> Gross Total
          </button>

          <button
            onClick={addProduct}
            className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 shadow-md transition-all duration-300"
          >
            <FaPlus className="text-green-600" /> Add Product
          </button>

          <button
            onClick={removeProduct}
            className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 shadow-md transition-all duration-300"
          >
            <FaMinus className="text-red-600" /> Remove Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComponent;
