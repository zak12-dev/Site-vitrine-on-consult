import React from "react";
import { CheckCircle } from "lucide-react";

export default function Section3() {
  return (
    <div className="mx-6 md:mx-12 my-8">
      {/* Desktop */}
      <div className="hidden md:flex rounded-3xl flex-row justify-start gap-16 items-center px-8 py-20 text-green-950">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/img2.jpg"
            alt="Illustration"
            className="w-full max-w-md rounded-3xl"
          />
        </div>

        {/* Texte */}
        <div className="flex flex-col items-start gap-6 max-w-lg">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight">
            Your one stop to all <br />
            consulting needs
          </h1>
          <p className="text-lg">
            Hey there! I’m Jessica Parker. Digital <br />
            business consultant focused on online
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Trusted by thousands
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Certified & awarded
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Weekly reports
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Proven track record of success
            </li>
          </ul>

          <button className="self-start bg-green-400 text-[15px] text-green-950 px-6 py-2 rounded-md font-medium hover:bg-green-500 transition mt-5">
            Let’s talk
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-col justify-center items-center rounded-3xl px-6 py-12 gap-6 text-green-950">
        <img
          src="/images/img2.jpg"
          alt="Illustration"
          className="w-full max-w-xs sm:max-w-sm rounded-3xl mx-auto"
        />

        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-2xl font-semibold leading-tight tracking-tight">
            Your one stop to all <br />
            consulting needs
          </h1>
          <p className="text-lg">
            Hey there! I’m Jessica Parker. Digital <br />
            business consultant focused on online
          </p>

          <ul className="grid grid-cols-1 gap-2 text-left">
            <li className="flex items-center gap-2 justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Trusted by thousands
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Certified & awarded
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Weekly reports
            </li>
            <li className="flex items-center gap-2 justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Proven track record of success
            </li>
          </ul>

          <button className="bg-green-400 text-[15px] text-green-950 px-6 py-2 rounded-md font-medium hover:bg-green-500 transition mt-5">
            Let’s talk
          </button>
        </div>
      </div>
    </div>
  );
}
