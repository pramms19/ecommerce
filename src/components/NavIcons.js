import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { RiShoppingBagLine } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Search from "./SearchBar";

const NavIcons = () => {
  const [open, setOpen] = useState(false);
  const handleOpenSearch = () => {
    setOpen(true);
  };

  const handleCloseSearch = () => [setOpen(false)];

  return (
    <>
      <ul className="flex gap-8">
        <li>
          <RiSearchLine onClick={handleOpenSearch} role="button" />
        </li>
        <li>
          <Link to="/cart">
            <RiShoppingBagLine />
          </Link>
        </li>
        <li>
          <Link to="/wishlist">
            <RiHeartLine />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <RiUser3Line />
          </Link>
        </li>
      </ul>

      <Search open={open} handleCloseSearch={handleCloseSearch} />
    </>
  );
};

export default NavIcons;
