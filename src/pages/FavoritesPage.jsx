import { useContext } from "react";
import ProductSelectionContext from "../context/product-selection";
import ProductsList from "../components/ProductsList";

function FavoritesPage() {
  const { likedProducts } = useContext(ProductSelectionContext);

  const header = (
    <h2 className="text-3xl justify-center font-semibold flex ">
      {likedProducts.length > 0 ? "Favorites" : "Favorites is empty"}
    </h2>
  );

  return (
    <div className="flex flex-col items-center">
      {header}
      <ProductsList products={likedProducts} />
    </div>
  );
}
export default FavoritesPage;
