import MenuDropdown from "./MenuDropdown";

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
    <ul class="flex gap-16 text-justify font-thin  hover:bg-gray-50">
      <li class="flex">
        <MenuDropdown title="Winter" list={winterItems} />
      </li>
      <li class="flex">
        <MenuDropdown title="Summer" list={summerItems} />
      </li>

      <li>Accessories</li>
      <li>Dresses</li>
      <li>Shoes</li>
    </ul>
  );
};

export default Navbar;
