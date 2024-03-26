import { useContext } from "react";
import CheckoutProductItem from "../components/CheckoutProductItem";
import ProductSelectionContext from "../context/product-selection";
import Button from "../components/Button";
import { FaEuroSign } from "react-icons/fa";

function CartPage() {
  const { cartProducts, getTotalPrice } = useContext(ProductSelectionContext);

  const renderedProducts = cartProducts.map((product) => (
    <CheckoutProductItem key={product.id} item={product}></CheckoutProductItem>
  ));
  const headerCss = "text-3xl justify-center font-semibold flex";

  const header =
    cartProducts.length > 0 ? (
      <div className="flex flex-col">
        <h2 className={headerCss}>
          Total: <FaEuroSign className="text-xl self-center ml-2" />{" "}
          {getTotalPrice()}
        </h2>
        <Button primary className="self-center">
          Checkout
        </Button>
      </div>
    ) : (
      <div>
        <h2 className={headerCss}>Cart is empty</h2>
      </div>
    );
  return (
    <div className="flex flex-col items-center">
      {header}
      {renderedProducts}
    </div>
  );
}

export default CartPage;
