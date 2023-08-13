import Rating from "../components/Rating";
import Color from "../components/Color";
import Size from "../components/Size";
import Button from "../components/Button";
import { RiShoppingBagLine } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../Api";
import { useCartDispatch, useCart } from "../CartContext.js";
import { toast } from "react-toastify";
import { RiHeartFill } from "react-icons/ri";

const Detail = () => {
  const items = useCart();
  console.log("🚀 ~ file: Cart.js:10 ~ Cart ~ items:", items);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useCartDispatch();
  const notify = () => toast("Added to bag");

  const getProduct = async () => {
    const res = await get(`/products/${id}`);
    setProduct(res?.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="px-16 pb-16 w-full">
      <div className="py-8 text-[#8D8D8D]">{product.category}</div>
      {product && (
        <div className="flex">
          <div className="flex items-center bg-[#FAF9F6]">
            <img
              className="aspect-[4/3] w-full rounded object-contain my-4"
              src={product.image}
              alt="img"
            />
          </div>
          <div>
            <div className="flex-row w-full">
              <div className="px-8 text-4xl font-medium ">
                <div className="flex justify-between">
                  <div>{product.title}</div>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "added",
                        product: product,
                        quantity: 1,
                      });
                      notify("added");
                    }}
                  >
                    <RiHeartLine />
                  </button>
                </div>

                <div className="py-8">
                  {!!product.rating && <Rating rate={product.rating.rate} />}
                </div>
                <div>${product.price}</div>
              </div>

              <div className="flex justify-between w-full">
                <div className="p-8 text-lg">
                  Color
                  <div className="flex-col space-x-2">
                    <Color color="blue" />
                    <Color color="black" />
                    <Color color="gray" />
                  </div>
                </div>
                <div className="p-8 text-lg">
                  Size
                  <div className="flex-col space-x-2">
                    <Size text="M" />
                    <Size text="L" />
                    <Size text="XL" />
                    <Size text="XXl" />
                  </div>
                </div>
              </div>
              <div className="w-full px-8">
                <Button
                  icon={<RiShoppingBagLine />}
                  size="big"
                  text="Add to bag"
                  onClick={() => {
                    dispatch({
                      type: "added",
                      product: product,
                      quantity: 1,
                    });
                    notify("added");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Detail;
