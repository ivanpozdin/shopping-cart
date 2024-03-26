/* eslint-disable react/prop-types */
import { FaEuroSign } from "react-icons/fa";
import Button from "./Button";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useContext } from "react";
import ProductSelectionContext from "../context/product-selection";

const wrapTitle = function (title) {
  if (title.length <= 40) return title;

  return title.slice(0, 38) + "...";
};

function ProductItem({ item }) {
  const {
    toggleLikeForProduct,
    isProductLiked,
    toggleProductInCart,
    isProductInCart,
  } = useContext(ProductSelectionContext);

  const productInCart = isProductInCart(item.id);

  return (
    <div className="shadow p-5 lg:p-10 flex flex-col justify-end items-center">
      <div>
        <img src={item.image} alt={item.title} className="max-h-56 max-w-48" />
      </div>
      <div className="">
        <p className="flex gap-1 items-center">
          {item.price.toFixed(2)}
          <FaEuroSign />
        </p>
        <h3 className="w-48">{wrapTitle(item.title)}</h3>
        <div className="flex justify-center mt-5">
          <Button
            danger={productInCart}
            outline={productInCart}
            primary={!productInCart}
            onClick={() => toggleProductInCart(item)}
          >
            {isProductInCart(item.id) ? "Remove" : "Add to cart"}
          </Button>
          <Button onClick={() => toggleLikeForProduct(item)}>
            {isProductLiked(item.id) ? <MdFavorite /> : <MdFavoriteBorder />}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
