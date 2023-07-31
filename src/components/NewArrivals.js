import { useEffect, useState } from "react";
import { get } from "../Api";
import Card from "./Card";
import Button from "./Button";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await get("/products");
    setProducts(res?.data.slice(0, 5));
  };

  useEffect(() => {
    getProducts(products);
  });

  return (
    <div className="py-20">
      <div className="border-box w-1440px h-531px py-16 px-8 bg-[url('/home/gurzu-12345/Development/react/pramms-store/src/assests/bg-na.png')]">
        <div className="grid grid-cols-1  md:grid-cols-4 lg:grid-cols-6 gap-4 ">
          <div className="flex align-middle flex-col text-center justify-center ">
            <div>
              <div className="text-[#001427] text-4xl py-12">New Arrivals</div>

              <Button text="Explore" />
            </div>
          </div>

          {products.length > 0 &&
            products.map((product) => <Card product={product} />)}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
