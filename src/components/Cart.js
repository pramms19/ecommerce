import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../Api";

const Cart = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    const res = await get(`/carts`);
    setProduct(res?.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="px-16 py-8">
      <div className="text-4xl font-medium pb-8">Shopping Bag</div>
      <hr className="" />
      <div>
        <ul className="flex justify-center gap-80 py-4">
          <li></li>
          <li>Item</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
        </ul>
      </div>
      <hr className="" />

      <div></div>
    </div>
  );
};

export default Cart;
