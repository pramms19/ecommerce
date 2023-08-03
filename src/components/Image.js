const Image = ({ img }) => {
  return (
    <div className="relative w-full">
      <img
        className=" object-cover transition-transform  w-full h-full  opacity-100"
        src={img.src}
        alt={img.alt}
      ></img>

      <div className="absolute flex h-full w-full justify-center items-center bg-black    transition-transform duration-500 ease-linear  top-0 left-0  opacity-0 hover:opacity-70">
        <div className="text-3xl text-white  ">{img.label}</div>
      </div>
    </div>
  );
};

export default Image;
