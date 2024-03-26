/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
const ProductSelectionContext = createContext();

function ProductSelectionProvider({ children }) {
  const [likedProducts, setLikedProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const isProductLiked = function (productId) {
    return Boolean(likedProducts.find((product) => product.id === productId));
  };

  const toggleLikeForProduct = function (changedProduct) {
    const i = likedProducts.findIndex(
      (product) => product.id === changedProduct.id
    );

    if (i === -1) {
      setLikedProducts([...likedProducts, changedProduct]);
    } else {
      setLikedProducts([
        ...likedProducts.slice(0, i),
        ...likedProducts.slice(i + 1),
      ]);
    }
  };

  const toggleProductInCart = function (changedProduct) {
    const i = cartProducts.findIndex(
      (product) => product.id === changedProduct.id
    );

    if (i === -1) {
      setCartProducts([...cartProducts, { ...changedProduct, quantity: 1 }]);
    } else {
      setCartProducts([
        ...cartProducts.slice(0, i),
        ...cartProducts.slice(i + 1),
      ]);
    }
  };

  const updateQuantity = function (productId, quantity) {
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.id !== productId) return { ...product };

      return { ...product, quantity };
    });
    setCartProducts(updatedCartProducts);
  };

  const isProductInCart = function (productId) {
    return Boolean(cartProducts.find((product) => product.id === productId));
  };

  const getTotalPrice = function () {
    const price = cartProducts.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );

    return price.toFixed(2);
  };

  return (
    <ProductSelectionContext.Provider
      value={{
        likedProducts,
        toggleLikeForProduct,
        isProductLiked,
        toggleProductInCart,
        isProductInCart,
        cartProducts,
        updateQuantity,
        getTotalPrice,
      }}
    >
      <div></div>
      {children}
    </ProductSelectionContext.Provider>
  );
}

export { ProductSelectionProvider };
export default ProductSelectionContext;
