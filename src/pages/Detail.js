import Rating from "../components/Rating";
import Color from "../components/Color";
import Size from "../components/Size";
import Button from "../components/Button";
import { RiHeartLine, RiShoppingBagLine } from "react-icons/ri";
import { RiHeartFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../Api";
import { useCartDispatch } from "../AppContext.js";
import { toast } from "react-toastify";
import { useCart } from "../AppContext";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useCartDispatch();
  const notify = () => toast.info("Added to bag");
  const notif = () => toast.info("Added to wishlist");
  const notification = () => toast.info("Removed from wishlist");
  const items = useCart();
  const { wishlistItems } = items;
  console.log("🚀 ~ file: Detail.js:22 ~ Detail ~ wishlistItems:", wishlistItems);

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
        <div className="flex gap-16">
          <div className="flex items-center bg-[#FAF9F6]">
            <img
              className="aspect-[4/3] max-w-md w-full rounded object-contain my-4"
              src={product.image}
              alt="img"
            />
          </div>
          <div>
            <div className="flex-row max-w-lg">
              <div className="px-8 text-4xl font-medium ">
                <div className="flex justify-between">
                  <div>{product.title}</div>
                  <button
                    onClick={() => {
                      if (wishlistItems.map((x) => x.product.id).includes(product.id)) {
                        dispatch({
                          type: "deletedWishList",
                          product: product,
                          quantity: 1
                        });
                        notification("deletedWishList");
                      } else {
                        dispatch({
                          type: "addedWishList",
                          product: product,
                          quantity: 1
                        });

                        notif("addedWishList");
                      }
                    }}>
                    {wishlistItems.map((x) => x.product.id).includes(product.id) ? (
                      <RiHeartFill />
                    ) : (
                      <RiHeartLine />
                    )}
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
                      type: "addedCart",
                      product: product,
                      quantity: 1
                    });
                    notify("addedCart");
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
