import { ErrImg } from "../assests";

const NotFound = () => {
  return (
    <div className="px-16 py-8 text-center text-2xl">
      <img className="inline-block align-middle py-8" src={ErrImg} alt="404 not found"></img>
    </div>
  );
};
export default NotFound;
