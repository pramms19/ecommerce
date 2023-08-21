import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { CodImg, PhoneImg, VisaImg } from "../assests";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Checkout({ open, handleCloseSearch }) {
  const cancelButtonRef = useRef(null);
  const [step, setStep] = useState(1);
  const {
    register,
    formState: { errors }
  } = useForm();

  const handleCloseModal = () => {
    handleCloseSearch();
    setStep(1);
  };

  const FirstStep = () => {
    return (
      <div className="px-16">
        <div className="text-3xl text-center">Shipping</div>
        <div className="text-center py-4">Fill your shipping address to proceed</div>
        <div className="grid gap-y-4">
          <div>
            <div className="py-2">Province/State</div>
            <input
              placeholder="Enter your province/state"
              {...register("userName", {
                required: true
              })}
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                padding: "10px",
                width: "100%",
                border: " 1px solid #DDD"
              }}
            />
            {errors.userName?.type === "required" && <p role="alert">Username is required</p>}
          </div>

          <div>
            <div className="py-2">City</div>
            <input
              placeholder="Enter your city"
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                padding: "10px",
                width: "100%",
                border: " 1px solid #DDD"
              }}
            />
          </div>

          <div>
            <div className="py-2">Address</div>
            <input
              placeholder="Enter your address"
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                padding: "10px",
                width: "100%",
                border: " 1px solid #DDD"
              }}
            />
          </div>
        </div>
        <div className="grid gap-y-2 py-4">
          <Button size="big" text="Continue" onClick={() => setStep(2)} />
          <Button
            color="light"
            text="Cancel"
            onClick={() => handleCloseModal()}
            ref={cancelButtonRef}
          />
        </div>
      </div>
    );
  };

  const SecondStep = () => {
    return (
      <div className="px-16">
        <div className="text-3xl text-center">Payment</div>
        <div className="text-center py-4">Choose your payment method</div>
        <div className="grid gap-y-4">
          <div>
            <div className="py-2">Full name</div>
            <input
              placeholder="Enter your full name"
              {...register("userName", {
                required: true
              })}
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                padding: "10px",
                width: "100%",
                border: " 1px solid #DDD"
              }}
            />
            {errors.userName?.type === "required" && <p role="alert">Username is required</p>}
          </div>

          <div>
            <div className="py-2">Phone number</div>
            <input
              placeholder="Enter your phone number"
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                padding: "10px",
                width: "100%",
                border: " 1px solid #DDD"
              }}
            />
          </div>

          <div>
            <div className="py-2">Select a payment method:</div>
            <div className="flex gap-6">
              <button className="focus:ring  px-4 rounded-3xl">
                <img src={CodImg} alt="COD" />
              </button>
              <button className="focus:ring  px-4 rounded-3xl">
                <img src={PhoneImg} alt="Phone Pay" />
              </button>
              <button className="focus:ring  px-4 rounded-3xl">
                <img src={VisaImg} alt="Visa" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid gap-y-2 py-2">
          <Button size="big" text="Continue" onClick={() => setStep(3)} />
          <Button color="light" text="Cancel" onClick={() => setStep(1)} />
        </div>
      </div>
    );
  };

  const ThirdStep = () => {
    return (
      <div className="px-16 py-32">
        <div className="flex text-5xl text-[#059669] justify-center">
          Success
          <RiCheckboxCircleFill />
        </div>
        <div className="text-center text-xl text-[#059669] py-8">Your order has been placed</div>
        <div className="grid gap-y-2 py-4">
          <Link to="">
            <Button size="big" text="Go Back to home" />
          </Link>

          <Button
            color="light"
            text="Cancel"
            onClick={() => handleCloseModal()}
            ref={cancelButtonRef}
          />
        </div>
      </div>
    );
  };

  const renderComponents = () => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
    }
  };

  return (
    <Transition.Root show={!!open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleCloseModal}>
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
          <div className="flex min-h-full items-end  p-4 justify-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative top-0 h-[600px] w-96 transform overflow-auto rounded-md bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl ">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start"></div>
                </div>
                {renderComponents()}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
