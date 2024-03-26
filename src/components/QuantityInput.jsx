import Button from "./Button";
import classNames from "classnames";

/* eslint-disable react/prop-types */
function QuantityInput({ item, updateQuantity }) {
  const changeQuantityBtnClass = classNames(
    "hover:bg-slate-50 active:bg-slate-100"
  );

  return (
    <div className="flex flex-col mt-5">
      <label htmlFor="quantity" className="">
        Choose quantity:
      </label>
      <div className="flex">
        <Button
          onClick={() => {
            if (item?.quantity == 1) return;
            updateQuantity(item.id, item.quantity - 1);
          }}
          className={changeQuantityBtnClass}
        >
          -
        </Button>
        <input
          type="number"
          id="quantity"
          min={1}
          max={10}
          value={item?.quantity || 1}
          onChange={(e) => {
            const newQuantity = e.target.value;
            updateQuantity(item.id, newQuantity);
          }}
          className="border text-center self-stretch"
        />
        <Button
          onClick={() => {
            if (item?.quantity == 10) return;
            updateQuantity(item.id, item.quantity + 1);
          }}
          className={changeQuantityBtnClass}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default QuantityInput;
