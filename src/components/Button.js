import classNames from "classnames";

const Button = ({ color, text, onClick }) => {
  const btnClass = classNames({
    "bg-[#001427] h-12 text-center text-[#FBFDFF] px-6 rounded-3xl text-sm": true,
    "bg-red-500": true,
  });

  return (
    <button onClick={onClick} className={btnClass}>
      {text}
    </button>
  );
};

export default Button;
