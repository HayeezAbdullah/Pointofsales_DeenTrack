import React, { useState } from "react";

const ProductSearch = ({ onAddProduct }) => {
  const [barcode, setBarcode] = useState("");

  const handleBarcodeScan = (e) => {
    if (e.key === "Enter") {
      onAddProduct(barcode); // Send barcode to parent component
      setBarcode("");
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Scan Barcode or Search Product..."
        className="w-full p-2 border rounded"
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        onKeyDown={handleBarcodeScan}
      />
    </div>
  );
};

export default ProductSearch;
