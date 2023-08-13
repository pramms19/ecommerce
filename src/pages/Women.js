import { useEffect, useState } from "react";
import { get } from "../Api";
import Card from "../components/Card";
import Categories from "../components/Categories";

const Women = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await get("/products/category/women's clothing");
    setProducts(res?.data);
  };

  useEffect(() => {
    getProducts(products);
  });

  return (
    <div className="px-16 py-8">
      <div className="text-4xl pb-8">All Women</div>
      <div className="grid grid-cols-1  md:grid-cols-4 lg:grid-cols-6 gap-4 ">
        {products.length > 0 &&
          products.map((product) => <Card product={product} />)}
      </div>
      <div className="text-3xl font-medium py-12">More on Chic Seduire:</div>
      <Categories />
    </div>
  );
};

export default Women;
