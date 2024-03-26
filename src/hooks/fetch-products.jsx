async function fetchProducts(setProducts, limit = null) {
  const ending = limit ? `?limit=${limit}` : "";

  const response = await fetch(`https://fakestoreapi.com/products${ending}`);
  const products = await response.json();
  setProducts(products);
}

export default fetchProducts;
