import ReactStars from "react-rating-star-with-type";

const Rating = ({ rate }) => {
  return <ReactStars value={rate} edit={false} activeColors={["#FBBF24"]} size={24} />;
};

export default Rating;
