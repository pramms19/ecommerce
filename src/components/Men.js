import { useEffect, useState } from "react";
import { get } from "../Api";
import Card from "./Card";

const Men = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await get("/products/category/men's clothing");
    setProducts(res?.data);
  };

  useEffect(() => {
    getProducts(products);
  });

  return (
    <div className="px-16 py-8">
      <div className="text-4xl pb-8">All Men</div>
      <div className="grid grid-cols-1  md:grid-cols-4 lg:grid-cols-6 gap-4 ">
        {products.length > 0 &&
          products.map((product) => <Card product={product} />)}
      </div>
    </div>
  );
};

export default Men;
