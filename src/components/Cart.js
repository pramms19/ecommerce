import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import axios from "axios";
import { get } from "../Api";
import Button from "./Button";
import Categories from "./Categories";

const Cart = () => {
  const { id } = useParams();
  const [setCart] = useState({});
  const items = useCart();

  console.log("🚀 ~ file: Cart.js:10 ~ Cart ~ items:", items);

  const sum =
    Array.isArray(items) &&
    items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.product.price * currentValue.quantity;
    }, 0);
  console.log("🚀 ~ file: Cart.js:18 ~ Cart ~ sum:", sum);

  const getCart = async () => {
    const res = await get(`/products/${id}`);
    setCart(res?.data);
  };

  useCart(() => {
    getCart();
  }, []);

  return (
    <div className="px-16 py-8">
      <div className="text-4xl font-medium pb-8">Shopping Bag</div>

      <div className="">
        <table className="table-fixed gap-8 w-full">
          <thead>
            <tr className="border border-slate-300 text-3xl font-thin">
              <th></th>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            <hr className="pb-8" />
          </thead>
          {items.map((item) => (
            <tbody>
              <tr className="text-center text-xl">
                <td className="px-4 py-4">
                  {" "}
                  <div className="flex items-center bg-[#FAF9F6] ">
                    <img
                      className="aspect-[4/3] w-50px rounded object-contain my-4"
                      src={item.product.image}
                      alt="img"
                    />
                  </div>
                </td>

                <td>{item.product.title}</td>

                <td>${item.product.price}</td>
                <td>{item.quantity}</td>
                <td>${item.quantity * item.product.price}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <hr className="pb-8" />
        <div className="grid grid-cols-2 text-right text-2xl font-medium pr-24">
          <div>
            <div>Sub total</div>

            <div>Shipping</div>
            <div>Total</div>
          </div>
          <div>
            <div>${sum}</div>
            <div>$300</div>
            <div>${sum + 300}</div>
            <div className="py-4">
              <Button color="dark" text="Checkout" />
            </div>
          </div>
        </div>
        <div className="text-3xl font-medium py-12">More on Chic Seduire:</div>
        <Categories />
      </div>
    </div>
  );
};

export default Cart;
