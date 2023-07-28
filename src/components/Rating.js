import { useState } from "react";
import ReactStars from "react-rating-star-with-type";

const Rating = () => {
  const [star, setStar] = useState(5);

  const onChange = (nextValue) => {
    setStar(nextValue);
  };

  return (
    <ReactStars
      onChange={onChange}
      value={3}
      edit={false}
      activeColors={["#FBBF24"]}
    />
  );
};

export default Rating;
