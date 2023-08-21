/* eslint-disable react/prop-types */
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Fragment } from "react";

const MenuDropdown = ({ title, list }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="relative flex">
        {title}
        <RiArrowDownSLine className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 z-10 mt-8 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {list.map((link) => (
              <Menu.Item key={link.title}>
                {({ active }) => (
                  <a
                    key={link.title}
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}>
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu.Button>
    </Menu>
  );
};

export default MenuDropdown;
