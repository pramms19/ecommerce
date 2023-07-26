import { Menu, Transition } from "@headlessui/react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Fragment } from "react";

const Navbar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const winterItems = [
    { href: "/all-winter", label: "All Winter" },
    { href: "/men", label: "Men" },
    { href: "/women", label: "Women" },
    { href: "/new-arrivals", label: "New Arrivals" },
    { href: "/hot-picks", label: "Hot Picks" },
  ];

  return (
    <ul class="flex gap-16 text-justify font-thin  hover:bg-gray-50">
      <li class="flex">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="relative flex">
            Winter
            <RiArrowDownSLine
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-8 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {winterItems.map((link) => (
                  <Menu.Item>
                    {({ active }) => (
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {link.label}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu.Button>
        </Menu>
      </li>
      <li class="flex">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="relative flex">
            Summer
            <RiArrowDownSLine
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-8 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {winterItems.map((link) => (
                  <Menu.Item>
                    {({ active }) => (
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        {link.label}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu.Button>
        </Menu>
      </li>
      <li>Accessories</li>
      <li>Dresses</li>
      <li>Shoes</li>
    </ul>
  );
};

export default Navbar;
