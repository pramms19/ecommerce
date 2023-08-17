import { useEffect, useState } from "react";
import { get } from "../Api";
import Card from "../components/Card";
import Categories from "../components/Categories";
import { ThreeDots } from "react-loader-spinner";

const Men = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    const res = await get("/products/category/men's clothing");
    setIsLoading(false);
    setProducts(res?.data);
  };

  useEffect(() => {
    getProducts(products);
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          <div className="flex justify-center ">
            {" "}
            <ThreeDots
              height="200"
              width="200"
              radius="9"
              color="gray"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
          <Categories />
        </div>
      ) : (
        <div className="px-16 py-8">
          <div className="text-4xl pb-8">All Men</div>
          <div className="grid grid-cols-1  md:grid-cols-4 lg:grid-cols-6 gap-4 ">
            {products.length > 0 &&
              products.map((product) => <Card key={product.id} product={product} />)}
          </div>
          <div className="text-3xl font-medium py-12">More on Chic Seduire:</div>
          <Categories />
        </div>
      )}
    </>
  );
};

export default Men;
