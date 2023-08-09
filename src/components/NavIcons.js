import { RiSearchLine } from "react-icons/ri";
import { RiShoppingBagLine } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <ul class="flex gap-8">
      <li>
        <RiSearchLine />
      </li>
      <li>
        <RiShoppingBagLine />
      </li>
      <li>
        <RiHeartLine />
      </li>
      <li>
        <Link to="/login">
          <RiUser3Line />
        </Link>
      </li>
    </ul>
  );
};

export default NavIcons;
