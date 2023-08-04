import { useEffect, useState } from "react";
import { get } from "../Api";
import Card from "./Card";

const Jewellery = () => {
  const [products, setProducts] = useState([]);
  console.log("🚀 ~ file: Jewellery.js:7 ~ Jewellery ~ products:", products);

  const getProducts = async () => {
    const res = await get("/products/category/jewelery");
    setProducts(res?.data);
  };

  useEffect(() => {
    getProducts(products);
  });

  return (
    <div className="px-16 py-8">
      <div className="text-4xl pb-8">All Jewelleries</div>
      <div className="grid grid-cols-1  md:grid-cols-4 lg:grid-cols-6 gap-4 ">
        {products.length > 0 &&
          products.map((product) => <Card product={product} />)}
      </div>
    </div>
  );
};

export default Jewellery;
