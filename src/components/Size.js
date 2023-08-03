import classNames from "classnames";

const Size = ({ color, text, onClick }) => {
  const btnClass = classNames({
    "bg-[#D9D9D9] h-8 text-center text-[#001427] px-4 rounded-3xl text-sm": true,
    "bg-[#FBFDFF] text-[]": false,
  });

  return (
    <button onClick={onClick} className={btnClass}>
      {text}
    </button>
  );
};

export default Size;
