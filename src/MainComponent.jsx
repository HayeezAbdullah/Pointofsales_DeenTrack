import ProductCard from "./ProductCard";
import ProductSearch from "./ProductSearch";

const MainComponent = () => {
  const handleAddProduct = (product) => {
    alert(`Added ${product} to Invoice`);
  };

  return (
    <>
      <ProductSearch />
      <ProductCard
        product_name={"Kottu Mee"}
        unit_price={"130/="}
        onAdd={handleAddProduct}
      />
    </>
  );
};

export default MainComponent;
