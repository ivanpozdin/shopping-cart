import { useEffect, useState } from "react";
import fetchProducts from "../hooks/fetch-products";
import ProductsList from "../components/ProductsList";
import Link from "../components/Link";

const getRandSeed = function () {
  return Math.round(Math.random() * 10000);
};

function Home() {
  const [featuredItems, setFeaturedItems] = useState([]);
  useEffect(() => {
    fetchProducts(setFeaturedItems, 4);
  }, []);

  return (
    <div>
      <div className="mb-5 flex justify-center">
        <img
          src={`https://picsum.photos/seed/${getRandSeed()}/1500/500`}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl bold text-center mb-5">Featured Products</h2>
        <ProductsList products={featuredItems} />
      </div>
      <div className="flex justify-center">
        <Link to="/shop" className="mt-5 text-2xl">
          Shop now!
        </Link>
      </div>
    </div>
  );
}

export default Home;
