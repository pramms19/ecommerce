import Icons from "./Icons";
import { LogowImg } from "../assests";

const Footer = () => {
  return (
    <div className=" text-white bg-[#001427]">
      <div className="px-40">
        <div className="grid grid-cols-2 lg:grid-cols-4 pt-16 justify-center ">
          <div>
            <ul>
              <div className="text-lg pb-8">Navigate</div>
              <div className="text-[#D1D5DB]">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Terms & Conditions</li>
                <li>Contact</li>
              </div>
            </ul>
          </div>

          <div>
            <ul>
              <div className="text-lg pb-8">Shop</div>
              <div className="text-[#D1D5DB]">
                <li>Women</li>
                <li>Men</li>
                <li>Jackets</li>
                <li>New Arrivals</li>
                <li>Hot Picks</li>
              </div>
            </ul>
          </div>

          <div>
            <ul>
              <div className="text-lg pb-8">Explore</div>
              <div className="text-[#D1D5DB]">
                <li>T-Shirts</li>
                <li>My Orders</li>
                <li>Wishlist</li>
                <li>Coats</li>
              </div>
            </ul>
          </div>
          <div>
            <ul>
              <div className="text-lg pb-8">
                <LogowImg />
              </div>
              <div className="text-[#D1D5DB]">
                <li>60-49 Road 11378 New York</li>
                <li>+65 11 188 888</li>
                <li>chicseduire@gmail.com</li>
                <li className="py-8">
                  <Icons />
                </li>
              </div>
            </ul>
          </div>
        </div>
        <hr />
      </div>

      <p className="py-6 text-center font-thin text-white">Copyright 2023. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
