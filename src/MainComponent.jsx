import ProductCard from "./ProductCard";
import ProductSearch from "./ProductSearch";

const MainComponent = () => {
  const handleAddProduct = (product) => {
    alert(`Added ${product} to Invoice`);
  };

  return (
    <>
      <ProductSearch />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <ProductCard
          product_name={"Kottu Mee"}
          unit_price={"130/="}
          onAdd={handleAddProduct}
        />
        <ProductCard
          product_name={"Maggie Noodles"}
          unit_price={"100/="}
          onAdd={handleAddProduct}
        />
        <ProductCard
          product_name={"Sunlight Soap"}
          unit_price={"200/="}
          onAdd={handleAddProduct}
        />
        <ProductCard
          product_name={"Munchee Biscuit"}
          unit_price={"150/="}
          onAdd={handleAddProduct}
        />
        <ProductCard
          product_name={"Sunfeast Biscuit"}
          unit_price={"180/="}
          onAdd={handleAddProduct}
        />
      </div>
    </>
  );
};

export default MainComponent;
