import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { ProductSelectionProvider } from "./context/product-selection.jsx";
import favicon from "./imgs/favicon.svg";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import AccountPage from "./pages/AccountPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

function changeFavicon(newFaviconUrl) {
  var existingLink = document.querySelector("link[rel~='icon']");
  if (!existingLink) {
    existingLink = document.createElement("link");
    existingLink.id = "dynamic-favicon";
    existingLink.rel = "shortcut icon";
    document.head.appendChild(existingLink);
  }
  existingLink.href = newFaviconUrl;
}

changeFavicon(favicon);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <NavigationProvider> */}
    <ProductSelectionProvider>
      <RouterProvider router={router} />
    </ProductSelectionProvider>
    {/* </NavigationProvider> */}
  </React.StrictMode>
);
