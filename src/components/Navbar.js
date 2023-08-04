import MenuDropdown from "./MenuDropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const winterItems = [
    { href: "/all-winter", label: "All Winter" },
    { href: "/men", label: "Men" },
    { href: "/women", label: "Women" },
    { href: "/new-arrivals", label: "New Arrivals" },
    { href: "/hot-picks", label: "Hot Picks" },
  ];

  const summerItems = [
    { href: "/all-winter", label: "All Summer" },
    { href: "/men", label: "Men" },
    { href: "/women", label: "Women" },
    { href: "/new-arrivals", label: "New Arrivals" },
    { href: "/hot-picks", label: "Hot Picks" },
  ];

  return (
    <ul className="flex gap-16 text-justify text-lg font-thin  hover:bg-gray-50">
      <li className="flex">
        <MenuDropdown title="Winter" list={winterItems} />
      </li>
      <li className="flex">
        <MenuDropdown title="Summer" list={summerItems} />
      </li>

      <li>
        {" "}
        <Link to="/products/categories/jewelery">Jewelleries </Link>
      </li>
      <li>Dresses</li>
      <li>Shoes</li>
    </ul>
  );
};

export default Navbar;
