/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { get } from "../Api";
import Card from "./Card";

const Hotpicks = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await get("/products");
    setProducts(res?.data.slice(0, 6));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="text-4xl text-center  mb-4 text-[#001427]"> Hot Picks </div>

      <div className="grid grid-cols-1  md:grid-cols-4 lg:grid-cols-6 gap-4 ">
        {products.length > 0 && products.map((product) => <Card product={product} />)}
      </div>
    </div>
  );
};

export default Hotpicks;
