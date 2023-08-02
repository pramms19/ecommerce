import { RiPinterestFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";

const Icons = () => {
  return (
    <ul className="flex gap-8 ">
      <li>
        <RiPinterestFill />
      </li>
      <li>
        <RiInstagramFill />
      </li>
      <li>
        <RiWhatsappFill />
      </li>
      <li>
        <RiFacebookCircleFill />
      </li>
    </ul>
  );
};

export default Icons;
