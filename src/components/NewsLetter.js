import React from "react";

const NewsLetter = () => {
  return (
    <div className="max-w-[1520px] m-auto text-black px-4 bg-[#FFE600]">
      <div className="mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1>Need advice on how to improve your flow?</h1>
          <p>Sign Up to join our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="email"
              className="p-3 flex w-full rounded-md text-black"
            />
            <button className="bg-[#000000] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 border-none">
              Notify me
            </button>
          </div>
          <p>
            we are concerned about the security of your data. Read <br></br>
            <span className="text-[#000000] cursor-pointer font-bold">Privacy Policy</span>
          </p>
        </div>
        <hr className=" bg-black h-[1px]"/>
      </div>
    </div>
  );
};

export default NewsLetter;
