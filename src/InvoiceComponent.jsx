import React, { useState, useEffect } from "react";
import InvoiceRow from "./InvoiceRow";

const InvoiceComponent = () => {
  const [totals, setTotals] = useState([]);
  const [sum, setSum] = useState(0); // Track the sum of totals

  const handleTotalChange = (total) => {
    if (total > 0) {
      setTotals((prevTotals) => {
        const newTotals = [...prevTotals, total];
        return newTotals;
      });
    } else {
      console.log("waiting for proper input...");
    }
  };

  const [products, setProducts] = useState([
    { productName: "Kottu Mee", unitPrice: 130, quantity: 3 },
  ]);

  const addProduct = () => {
    setProducts([...products, { productName: " ", unitPrice: 3, quantity: 1 }]);
  };

  const handlePrint = () => {
    console.log("Total is: " + sum);
  };

  // Calculate sum whenever the totals array changes
  useEffect(() => {
    const newSum = totals.reduce((acc, curr) => acc + curr, 0);
    setSum(newSum);
  }, [totals]);

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
                <InvoiceRow key={index} onTotalChange={handleTotalChange} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-6">
          <div className="font-bold text-xl">
            <span>Total: </span>
            <span>{sum}</span>
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Print Invoice
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            onClick={addProduct}
          >
            + Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComponent;
