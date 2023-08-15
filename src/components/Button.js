import classNames from "classnames";

const Button = ({ color, size, text, icon, onClick }) => {
  const btnClass = classNames({
    "bg-[#001427] hover:bg-[#001E3B] active:bg-[#000F1D] flex items-center justify-center w-full h-12 text-center text-[#FBFDFF] rounded-3xl text-sm":
      size === "big",
    "bg-[#FBFDFF] hover:bg-[#C9D4E0] active:bg-[#B0C0D0] flex items-center justify-center w-full h-12 text-center px-4 text-[#001427]  rounded-3xl text-sm":
      color === "light",
    "bg-[#001427] hover:bg-[#001E3B] active:bg-[#000F1D] h-12 text-center text-[#FBFDFF] px-4 rounded-3xl text-sm":
      color === "dark",
    "bg-[#D9D9D9] hover:bg-[#B91C1C] active:bg-[#B91C1C] h-8 text-center text-black px-4 rounded-3xl text-sm":
      color === "red",
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
