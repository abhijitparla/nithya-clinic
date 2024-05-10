'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const TopNavHeader = () => {
    const hamburgerHandle = () => {
        console.log('inside hamburger')
    }
  return (
    <div className="flex justify-between w-full p-3 shadow-lg">
      <div className="flex ">
        {/* <div className="mr-2 border-2 border-slate-700 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div> */}
        <Link href='/'>
        <h1 className="font-bold text-xl text-[#385a64]">Nithya Gastroentology & Liver Clinic</h1>
        </Link>
      </div>
      <div className="hidden lg:table ">
        <Button className="mr-3">Book Appointment</Button>
        <Button>Get Started</Button>
      </div>
      <div onClick={hamburgerHandle} className="self-center lg:hidden"> 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default TopNavHeader;
