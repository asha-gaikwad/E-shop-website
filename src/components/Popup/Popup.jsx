import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Shared/Button";


const Popup = ({ orderPopup, handleOrderPopup }) => {

  return (
    <>
      {orderPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="w-[400px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
              {/* Header Section */}
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Order Now</h1>
                <div
                  className="cursor-pointer text-2xl"
                  onClick={handleOrderPopup}
                >
                  <IoCloseOutline size={30} />
                </div>
              </div>
              {/* Form Section */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-input mb-2 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input mb-2 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="form-input mb-2 p-2 w-full border border-gray-300 rounded-md"
                  required
                />
                <div className=" flex justify-center">
                <Button
                          text="Order Now"
                          bgColor="bg-primary"
                          textColor="text-white"
                          className="pb-4"
                        />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
