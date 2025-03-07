import { useState, useEffect } from "react";

const InvoiceRow = ({ onTotalChange }) => {
  const [quantity, setQuantity] = useState();
  const [unitPrice, setUnitPrice] = useState();

  // Calculate total whenever quantity or unitPrice changes
  useEffect(() => {
    const total = quantity * unitPrice;
    onTotalChange(total); // Send the total to the parent component
  }, [quantity]);

  return (
    <tr>
      <td className="px-4 py-2 border-b">
        <input
          type="text"
          className="w-40 px-2 py-1 border rounded"
          placeholder="Product Name"
        />
      </td>
      <td className="px-4 py-2 border-b">
        <input
          type="number"
          value={unitPrice}
          onChange={(e) => setUnitPrice(parseInt(e.target.value))}
          className="w-20 px-2 py-1 border rounded"
          placeholder="Unit Price"
        />
      </td>
      <td className="px-4 py-2 border-b">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="w-20 px-2 py-1 border rounded"
          placeholder="Quantity"
        />
      </td>
      <td className="px-4 py-2 border-b">
        <input
          value={quantity * unitPrice}
          className="w-20 px-2 py-1 rounded readonly"
          placeholder="Total"
          readOnly
        />
      </td>
    </tr>
  );
};

export default InvoiceRow;
