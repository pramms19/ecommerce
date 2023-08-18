import { useEffect, useState, Fragment, useRef } from "react";
import { get } from "../Api";
import Card from "./Card";
import { RiSearchLine } from "react-icons/ri";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";

export default function Search({ open, handleCloseSearch }) {
  const cancelButtonRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getProducts = async () => {
    const res = await get("/products");

    setProducts(res?.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const filteredProducts = products?.filter((ele) => {
      return ele.title.toLowerCase().indexOf(searchTerm) > -1;
    });

    setResults(filteredProducts);
  }, [searchTerm]);

  return (
    <Transition.Root show={!!open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleCloseSearch}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed justify-center inset-0 z-10 overflow-y-auto px-8">
          <div className="flex  items-end  p-4 text-center sm:items-center sm:p-0 top-0 mt-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative top-0 h-[600px] w-96 transform overflow-auto rounded-md bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-8xl ">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start"></div>
                </div>

                <div className="px-16">
                  <div className="flex gap-2">
                    <RiSearchLine className="text-3xl text-gray-400 justify-center" />
                    <input
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                      }}
                      placeholder="Search"
                      style={{
                        backgroundColor: "white",
                        borderRadius: "4px",
                        padding: "10px",
                        width: "100%",
                        border: " 1px solid #DDD"
                      }}
                    />

                    <button
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-400 hover:bg-gray-200 sm:mt-0 sm:w-auto"
                      onClick={() => handleCloseSearch(false)}
                      ref={cancelButtonRef}>
                      Cancel
                    </button>
                  </div>

                  <div className="py-4 font-medium text-xl">Recommendations</div>
                  <div className="flex pb-8 ">
                    <Button color="lighter" text="Men" />
                    <Button color="lighter" text="Women" />
                    <Button color="lighter" text="Jackets" />
                    <Button color="lighter" text="Shoes" />
                  </div>

                  <div>
                    <div className="grid grid-cols-5 pb-8">
                      {results?.length > 0 ? (
                        results?.map((product) => <Card key={product.id} product={product} />)
                      ) : (
                        <h1>No Products</h1>
                      )}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
