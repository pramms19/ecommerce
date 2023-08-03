import classNames from "classnames";

const Button = ({ color, text, icon, onClick }) => {
  const btnClass = classNames({
    "bg-[#001427] h-12 text-center text-[#FBFDFF] px-6 rounded-3xl text-sm": true,
    "bg-[#FBFDFF] text-[#001427]": false,
  });

  return (
    <button onClick={onClick} className={btnClass}>
      <div className="flex items-stretch">
        {icon}
        {text}
      </div>
    </button>
  );
};

export default Button;
