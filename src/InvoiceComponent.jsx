import React, { useState } from "react";

const InvoiceComponent = () => {
  const [products, setProducts] = useState([
    { productName: "Product 1", unitPrice: 10, quantity: 1 },
    { productName: "Product 2", unitPrice: 20, quantity: 1 },
  ]);

  const handleQuantityChange = (index, value) => {
    const newProducts = [...products];
    newProducts[index].quantity = value;
    setProducts(newProducts);
  };

  const handleProductChange = (index, value) => {
    const newProducts = [...products];
    newProducts[index].productName = value;
    setProducts(newProducts);
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => {
      return total + product.unitPrice * product.quantity;
    }, 0);
  };

  const handlePrint = () => {
    window.print();
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
                <tr key={index}>
                  <td className="px-4 py-2 border-b">
                    <input
                      type="text"
                      value={product.productName}
                      onChange={(e) =>
                        handleProductChange(index, e.target.value)
                      }
                      className="w-full px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="px-4 py-2 border-b">
                    ${product.unitPrice.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 border-b">
                    <input
                      type="number"
                      value={product.quantity}
                      onChange={(e) =>
                        handleQuantityChange(index, parseInt(e.target.value))
                      }
                      className="w-20 px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="px-4 py-2 border-b">
                    ${(product.unitPrice * product.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-6">
          <div className="font-bold text-xl">
            <span>Total: </span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Print Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComponent;
