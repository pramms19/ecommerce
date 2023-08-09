import classNames from "classnames";

const Button = ({ color, size, text, icon, onClick }) => {
  const btnClass = classNames({
    "bg-[#001427] flex items-center justify-center w-full h-12 text-center text-[#FBFDFF] rounded-3xl text-sm":
      size === "big",
    "bg-[#FBFDFF] text-[#001427]": color === "light",
    "bg-[#001427] h-12 text-center text-[#FBFDFF] px-6 rounded-3xl text-sm":
      color === "dark",
  });

  return (
    <button onClick={onClick} className={btnClass}>
      <div className="flex items-stretch">
        {icon}
        <span className="ml-2 mr-2">{text}</span>
      </div>
    </button>
  );
};

export default Button;
