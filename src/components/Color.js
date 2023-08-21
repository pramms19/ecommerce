/* eslint-disable react/prop-types */
import classNames from "classnames";

const Color = ({ color, onClick }) => {
  const btnClass = classNames({
    "bg-[#001427] hover:bg-gray-200 focus:ring h-8  px-4 rounded-3xl": color === "blue",
    "bg-black hover:bg-gray-200 focus:ring h-8  px-4 rounded-3xl ": color === "black",
    "bg-gray-500 hover:bg-gray-200 focus:ring h-8  px-4 rounded-3xl": color === "gray"
  });

  return <button onClick={onClick} className={btnClass}></button>;
};

export default Color;
