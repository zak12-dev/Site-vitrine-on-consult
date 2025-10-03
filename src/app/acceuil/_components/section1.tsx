import React from "react";

export default function Section1() {
  return (
    <div className="mx-6 md:mx-12 my-8">
      {/* Desktop */}
      <div className="hidden md:flex mt-25 mb-30 max-h-[450px] rounded-3xl flex-row justify-between items-center px-8 py-20 gap-8 bg-gradient-to-r from-green-950 to-green-900 text-white">
        {/* Texte */}
        <div className="flex flex-col gap-6 max-w-lg px-6 text-left">
          <h1 className="text-5xl leading-tight tracking-tight">
            Boost your <br /> business through <br />
            <span className="text-green-400">online </span>marketing
          </h1>
          <p className="text-gray-300 text-lg">
            Hey there! Im Jessica Parker. Digital business consultant focused on
            online marketing and advertising
          </p>
          <div className="flex flex-row gap-4 mt-4">
            <button className="bg-green-400 text-[15px] text-green-950 px-6 py-2 rounded-sm font-medium hover:bg-green-500 transition shadow-md">
              Lets talk
            </button>
            <button className="text-green-400 text-[15px] px-6 py-2 rounded-md font-medium hover:bg-green-400 hover:text-green-950 transition">
              See case studio
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-end w-auto">
          <img
            src="/images/img1.jpg"
            alt="Illustration"
            className="w-full max-w-md rounded-3xl"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-col justify-center items-center mt-12 mb-20 gap-6 bg-gradient-to-r from-green-950 to-green-900 text-white rounded-3xl px-6 py-12">
        {/* Image */}
        <img
          src="/images/img1.jpg"
          alt="Illustration"
          className="w-full max-w-xs rounded-3xl mx-auto"
        />

        {/* Texte */}
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-3xl leading-tight tracking-tight">
            Boost your <br /> business through <br />
            <span className="text-green-400">online </span>marketing
          </h1>
          <p className="text-gray-300 text-base">
            Hey there! Im Jessica Parker. Digital <br />
            business consultant focused on online <br />
            marketing and advertising
          </p>
          <div className="flex flex-col gap-4">
            <button className="bg-green-400 text-[15px] text-green-950 px-6 py-2 rounded-sm font-medium hover:bg-green-500 transition shadow-md">
              Lets talk
            </button>
            <button className="text-green-400 text-[15px] px-6 py-2 rounded-md font-medium hover:bg-green-400 hover:text-green-950 transition">
              See case studio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
