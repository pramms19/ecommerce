import MenuDropdown from "./MenuDropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const winterItems = [
    { href: "/all-winter", label: "All Winter" },
    { href: "/men", label: "Men" },
    { href: "/women", label: "Women" },
    { href: "/new-arrivals", label: "New Arrivals" },
    { href: "/hot-picks", label: "Hot Picks" }
  ];

  const summerItems = [
    { href: "/all-winter", label: "All Summer" },
    { href: "/men", label: "Men" },
    { href: "/women", label: "Women" },
    { href: "/new-arrivals", label: "New Arrivals" },
    { href: "/hot-picks", label: "Hot Picks" }
  ];

  return (
    <ul className="flex gap-16 text-justify text-lg font-thin  ">
      <li className="flex px-4 rounded hover:bg-[#D9D9D9]">
        <MenuDropdown title="Winter" list={winterItems} />
      </li>
      <li className="flex px-4 rounded hover:bg-[#D9D9D9]">
        <MenuDropdown title="Summer" list={summerItems} />
      </li>

      <li className="px-4 rounded hover:bg-[#D9D9D9]">
        {" "}
        <Link to="/products/categories/jewelery">Jewelleries </Link>
      </li>
      <li className="px-4 rounded hover:bg-[#D9D9D9]">Dresses</li>
      <li className="px-4 rounded hover:bg-[#D9D9D9]">Shoes</li>
    </ul>
  );
};

export default Navbar;
