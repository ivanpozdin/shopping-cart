import ProductItem from "./ProductItem";

/* eslint-disable react/prop-types */
function ProductsList({ products }) {
  const renderedProducts = products.map((product) => (
    <ProductItem key={product.id} item={product}></ProductItem>
  ));

  return (
    <div className="flex flex-col justify-center align-center mt-5">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-w-fit gap-5">
        {renderedProducts}
      </div>
    </div>
  );
}

export default ProductsList;
