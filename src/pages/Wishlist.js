import { RiHeartFill } from "react-icons/ri";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import { get } from "../Api";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const Wishlist = (product) => {
  const { id } = useParams();
  const [setWishlist] = useState({});
  const items = useCart();

  const getCart = async () => {
    const res = await get(`/products/${id}`);
    setWishlist(res?.data);
  };

  useCart(() => {
    getCart();
  }, []);

  return (
    <div className="p-16">
      <div className="flex">
        <div className="text-[#8D8D8D]">Home</div>
        <div>/Wishlist</div>
      </div>

      <div className="flex justify-center text-4xl font-medium pb-12">
        My Wishlist <RiHeartFill />
      </div>

      <Link to={`/products/${product.id}`}>
        <div className="grid grid-cols-5 gap-8">
          {items.map((item) => (
            <div className="bg-gray-50 p-4">
              <div className="flex items-center bg-[#FAF9F6] ">
                <img
                  className="aspect-[4/3] w-50px rounded object-contain my-4"
                  src={item.product.image}
                  alt="img"
                />
              </div>
              <div className="text-xl">{item.product.title}</div>
              <div className="text-2xl">${item.product.price}</div>
              <div>
                {!!item.product.rating && (
                  <Rating rate={item.product.rating.rate} />
                )}
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Wishlist;
