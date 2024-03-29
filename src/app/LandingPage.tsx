import Image from "next/image";
import React from "react";
import VarunImage from "../assests/gastro_landing.jpg";
import Link from "next/link";

const LandingPage = () => {
  const appointmentHandler = () => {
    console.log("appointment handler");
  };
  return (
    <div className="flex flex-col md:flex-row-reverse justify-center mt-2 p-5">
      <div className="flex justify-center md:w-1/2">
        <Image
          className="w-full"
          src={VarunImage}
          alt="Hero image of doctors examining human digestive system"
        />
      </div>
      <div className="md:w-1/2 flex flex-col">
        <div className="text-center mt-10">
          <h1 className="text-4xl font-bold md:text-5xl m-5 text-[#385a64]">
            Dont let <span className="text-blue-500">gastric problems</span>{" "}
            stop you from enjoying your life
          </h1>
        </div>
        <div className="text-center mt-20 flex flex-col w-52 self-center">
          <Link href="/appointments">
            <button className="bg-[#f46e58] text-[#ffffff]  hover:bg-stone-300 rounded-lg p-3 shadow-lg shadow-white w-full m-3">
              Book Appointment
            </button>
          </Link>

          <Link href="/random">
            <button className="bg-[#b3b6b8] hover:bg-stone-300 rounded-lg p-3 m-3 shadow-lg shadow-white w-full">
              About Doctor
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
