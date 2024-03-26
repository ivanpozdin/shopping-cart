/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

function Panel({ children, className, ...otherProps }) {
  const cssClasses = twMerge(
    className,
    "border rounded p-3 shadow bg-white w-full"
  );
  return (
    <div className={cssClasses} {...otherProps}>
      {children}
    </div>
  );
}

export default Panel;
