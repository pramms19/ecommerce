import classNames from "classnames";

const Color = ({ color, onClick }) => {
  const btnClass = classNames({
    "bg-[#001427] h-8 text-center text-[#FBFDFF] px-4 rounded-3xl text-sm": true,
    "bg-[#FBFDFF] text-[#001427]": false,
  });

  return <button onClick={onClick} className={btnClass}></button>;
};

export default Color;
