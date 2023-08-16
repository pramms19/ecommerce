import { RiHeartFill } from "react-icons/ri";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../AppContext";
import { get } from "../Api";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";
import { EBImg } from "../assests";

const Wishlist = () => {
  const { id } = useParams();
  const [setWishlist] = useState({});
  const items = useCart();

  const getWishlist = async () => {
    const res = await get(`/products/${id}`);
    setWishlist(res?.data);
  };

  useCart(() => {
    getWishlist();
  }, []);

  if (items.wishlistItems.length === 0) {
    return (
      <div className="px-16 py-8 text-center text-2xl">
        No items in wishlist.
        <div>
          <img
            className="inline-block align-middle py-8"
            src={EBImg}
            alt="img"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="p-16">
      <div className="flex">
        <div className="text-[#8D8D8D]">Home</div>
        <div>/Wishlist</div>
      </div>

      <div className="flex justify-center text-4xl font-medium pb-12">
        My Wishlist <RiHeartFill />
      </div>

      <div className="grid grid-cols-5 gap-8">
        {items.wishlistItems.map((item) => (
          <Link to={`/products/${item.product.id}`}>
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
              <div className="flex">
                {!!item.product.rating && (
                  <Rating rate={item.product.rating.rate} />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
