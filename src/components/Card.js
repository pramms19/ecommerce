import Rating from "./Rating";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className=" bg-gray-50 hover:drop-shadow-lg hover:scale-105 hover:bg-gray-200 p-4 w-full overflow-hidden">
        <img
          className="aspect-[4/3] w-full rounded object-contain my-4"
          src={product.image}
          alt="img"
        />

        <div className="text-left text-xl ">{product.title}</div>

        <div className="text-left text-2xl font-medium my-2">$ {product.price}</div>

        <div className="text-left text-base">
          <Rating rate={product.rating.rate} />
        </div>
      </div>
    </Link>
  );
};

export default Card;
