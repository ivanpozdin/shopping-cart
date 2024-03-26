/* eslint-disable react/prop-types */
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { Link as RouterLink, useLocation } from "react-router-dom";

function Link({ to, children, className, activeClassName }) {
  const currentPath = useLocation().pathname;

  const cssClasses = twMerge(
    className,
    classNames("text-blue-500", currentPath === to && activeClassName)
  );

  return (
    <div className={cssClasses} onClick={() => window.scrollTo(0, 0)}>
      <RouterLink to={to}>{children}</RouterLink>
    </div>
  );
}
export default Link;
