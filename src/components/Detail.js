import Rating from "./Rating";
import Color from "./Color";
import Size from "./Size";
import Button from "./Button";
import { RiShoppingBagLine } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";

const Detail = () => {
  return (
    <div className="flex w-full">
      <div className="border-box w-503px h-582px bg-[#D9D9D9]">
        <img
          className="aspect-[4/3] w-full rounded object-contain my-4"
          src="https://s3-alpha-sig.figma.com/img/f893/085b/18fc8811aef05519ad4b8f454fa8513a?Expires=1691971200&Signature=alRpbUI7iGBmRWsQ0JWD7NGS8~nFtrp0a99AGd7i8cGE0gbKJ84rUGMQnHSefByt3SDcDrBmaKS-srSo-KMCXSwSxjz1rzPwijfY0V-1FRC1Ng9aEeUC~AJaXy7RKSRriOUNTm-lftNDga-PCXsPgdfrjpqwo68nQxbP5GAhXL1o-g0bBd1c9IxPEO8Y85OQ2MG6Vthg7EuWLdXcgYK6MY71HkT3DNmQ-fvPoOmHNhSVZWNv2SdWg00zHSdWB6QlNFiIRilqtvio1QqrEv65pqyIUi4Q1PYG2IMde6B~lypULy8uuo6mmqZIFLfFCWKQLoFnGTmyd0AxMsUH0tK9Vg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="img"
        />
      </div>
      <div className="flex-row ">
        <div className="px-8 text-4xl font-medium ">
          <div className="flex w-full justify-between">
            <div>Men's formal jacket</div>
            <RiHeartLine />
          </div>

          <div className="py-8">
            <Rating />
          </div>
          <div>$200</div>
        </div>

        <div className="flex">
          <div className="p-8 text-lg">
            Color
            <div className="flex-col space-x-2">
              <Color />
              <Color />
              <Color />
            </div>
          </div>
          <div className="p-8 text-lg">
            Size
            <div className="flex-col space-x-2">
              <Size text="M" />
              <Size text="L" />
              <Size text="XL" />
              <Size text="XXl" />
            </div>
          </div>
        </div>
        <div className="px-8">
          <Button icon={<RiShoppingBagLine />} text="Add to bag" />
        </div>
      </div>
    </div>
  );
};
export default Detail;
