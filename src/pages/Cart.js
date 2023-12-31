import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../AppContext";
import { get } from "../Api";
import Button from "../components/Button";
import Categories from "../components/Categories";
import { useCartDispatch } from "../AppContext.js";
import { ESBImg } from "../assests";
import { Link } from "react-router-dom";
import Checkout from "../components/Checkout";
import { toast } from "react-toastify";

const Cart = () => {
  const { id } = useParams();
  const [setCart] = useState({});

  const [open, setOpen] = useState(false);
  const handleOpenSearch = () => {
    setOpen(true);
  };

  const handleCloseSearch = () => {
    setOpen(false);
  };
  const notify = () => toast.warn("Invalid");
  const items = useCart();
  const dispatch = useCartDispatch();

  const sum =
    Array.isArray(items.cartItems) &&
    items.cartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue?.product?.price * currentValue?.quantity;
    }, 0);

  const addQuantity = (item) => {
    dispatch({
      type: "addQuantity",
      product: item?.product
    });
  };

  const subtractQuantity = (item) => {
    dispatch({
      type: "subtractQuantity",
      product: item?.product
    });
  };

  const getCart = async () => {
    const res = await get(`/products/${id}`);
    setCart(res?.data);
  };

  useCart(() => {
    getCart();
  }, []);

  if (items.cartItems?.length === 0) {
    return (
      <div className="px-16 py-8 text-center text-2xl">
        Your cart is empty.
        <div>
          <img className="inline-block align-middle py-16" src={ESBImg} alt="img" />
        </div>
      </div>
    );
  }

  return (
    <div className="px-16 py-8">
      <Checkout open={open} handleCloseSearch={handleCloseSearch} />

      <div className="text-4xl font-medium pb-8">Shopping Bag</div>

      <div className="">
        <table className="table-fixed gap-8 w-full">
          <thead>
            <tr className="border border-slate-300 text-3xl font-thin text-[#001427]">
              <th></th>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            <hr className="pb-8" />
          </thead>

          {items.cartItems?.map((item) => (
            <tbody key={item?.product.id}>
              <tr className="text-center text-xl">
                <td className="px-4 py-4">
                  <Link key={item.product.id} to={`/products/${item.product.id}`}>
                    <div className="flex items-center">
                      <img
                        className="aspect-[4/3] w-56 rounded object-contain my-4"
                        src={item?.product?.image}
                        alt="img"
                      />
                    </div>
                  </Link>
                </td>

                <td>{item?.product?.title}</td>

                <td>${item?.product?.price}</td>

                <td>
                  <div className="flex justify-center">
                    <div className="bg-[#D9D9D9] rounded-3xl flex gap-2 justify-center w-20 ">
                      <button
                        onClick={() => {
                          if (item.quantity === 1) {
                            notify("subtractQuantity");
                          } else {
                            subtractQuantity(item);
                          }
                        }}>
                        -
                      </button>
                      {item?.quantity}
                      <button onClick={() => addQuantity(item)}>+</button>
                    </div>
                  </div>
                </td>
                <td>
                  <div>${item?.quantity * item?.product?.price}</div>
                  <div className="pt-20">
                    <Button
                      color="red"
                      text="Remove"
                      onClick={() => {
                        dispatch({
                          type: "deletedCart",
                          product: item?.product
                        });
                      }}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <hr className="pb-8" />
        <div className="px-32">
          <table className="table-fixed gap-8 w-full">
            <tbody className=" text-2xl text-right font-medium">
              <tr>
                <td>Sub Total</td>
                <td>${sum}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>${sum + 300}</td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <Button color="dark" text="Checkout" onClick={handleOpenSearch} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-3xl font-medium py-12">More on Chic Seduire:</div>
        <Categories />
      </div>
    </div>
  );
};

export default Cart;
