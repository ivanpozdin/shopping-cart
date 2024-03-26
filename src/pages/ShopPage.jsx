import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import DropDown from "../components/DropDown";
import fetchProducts from "../hooks/fetch-products";

const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const noSortOption = { label: "Sort by...", value: null };
const noCategoryOption = { label: "All categories", value: null };

const sortingOptions = [
  noSortOption,
  { label: "Price ascending", value: (a, b) => a.price - b.price },
  { label: "Price descending", value: (a, b) => b.price - a.price },
  { label: "Name a->z", value: (a, b) => a.title.localeCompare(b.title) },
  { label: "Name z->a", value: (a, b) => -a.title.localeCompare(b.title) },
];

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [sortSelection, setSortSelection] = useState(noSortOption);
  const [categorySelection, setCategorySelection] = useState(noCategoryOption);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  // get all categories
  const categories = [...new Set(products.map((p) => p.category))];
  categories.sort((a, b) => a.localeCompare(b));

  const categoriesOptions = [
    noCategoryOption,
    ...categories.map((c) => {
      return { label: capitalize(c), value: c };
    }),
  ];

  let transformedProducts = [...products];
  if (categorySelection?.value) {
    transformedProducts = transformedProducts.filter(
      (product) => product.category === categorySelection.value
    );
  }
  if (sortSelection?.value) {
    transformedProducts.sort(sortSelection.value);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <DropDown
          options={sortingOptions}
          value={sortSelection}
          onChange={setSortSelection}
        ></DropDown>
        <DropDown
          options={categoriesOptions}
          value={categorySelection}
          onChange={setCategorySelection}
        ></DropDown>
      </div>
      <ProductsList products={transformedProducts} />
    </div>
  );
}

export default ShopPage;
