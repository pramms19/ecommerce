import Image from "./Image";
import { JacketsImg, ShoesImg, BagsImg, TsImg } from "../assests";

const Categories = () => {
  const arr = [
    {
      src: JacketsImg,
      alt: "img",
      href: "/jackets",
      label: "Jackets",
    },
    {
      src: ShoesImg,
      alt: "img",
      href: "/shoes",
      label: "Shoes",
    },
    {
      src: BagsImg,
      alt: "img",
      href: "/bags",
      label: "Bags",
    },
    {
      src: TsImg,
      alt: "img",
      href: "/t-shirts",
      label: "T-shirts",
    },
  ];

  return (
    <div className="grid grid-cols-4 place-items-stretch object-fill overflow-hidden pb-20 ">
      {arr.map((x) => (
        <Image img={x} />
      ))}
    </div>
  );
};

export default Categories;
