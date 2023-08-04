import Rating from "./Rating";
import Color from "./Color";
import Size from "./Size";
import Button from "./Button";
import { RiShoppingBagLine } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../Api";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  console.log(
    "🚀 ~ file: Detail.js:14 ~ Detail ~ product:",
    product.rating?.rate
  );

  const getProduct = async () => {
    const res = await get(`/products/${id}`);
    setProduct(res?.data);
  };

  useEffect(() => {
    getProduct();

    //here you will fetch product
    //you will get id from routes
  }, []);

  return (
    <div className="px-16 pb-16 w-full">
      <p className="py-8">{product.category}</p>
      {product && (
        <div className="flex">
          <div className="border-box w-503px h-582px bg-[#FAF9F6]">
            <img
              className="aspect-[4/3] w-full rounded object-contain my-4"
              src={product.image}
              alt="img"
            />
          </div>
          <div className="flex-row w-full">
            <div className="px-8 text-4xl font-medium ">
              <div className="flex justify-between">
                <div>{product.title}</div>
                <RiHeartLine />
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
                  <Color />
                  <Color />
                  <Color />
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
            <div className="px-8">
              <Button
                icon={<RiShoppingBagLine />}
                text="Add to bag"
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Detail;
