import { MenImg, WomenImg } from "../assests";
import { Link } from "react-router-dom";

import Button from "./Button";

const Explore = () => {
  return (
    <div className="flex pb-20 items-stretch">
      <div className="relative w-full">
        <img className=" w-full  " src={MenImg} alt="men" />
        <div className="absolute flex flex-col items-center justify-center text-center inset-0">
          <div className="text-6xl text-white justify-center py-8">Men</div>
          <Link to="/products/categories/men's clothing">
            <Button color="light" text="Explore" />
          </Link>
        </div>
      </div>

      <div className="relative w-full">
        <img className=" w-full " src={WomenImg} alt="women" />
        <div className="absolute flex flex-col items-center justify-center text-center inset-0 ">
          <div className="text-6xl text-white align-middle justify-center py-8">
            Women
          </div>
          <Link to="/products/categories/women's clothing">
            <Button color="light" text="Explore" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
