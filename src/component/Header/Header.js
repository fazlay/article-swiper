import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-around bg-slate-100 py-1 border-b-2">
      <div className="flex flex-row items-center  ">
       
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          viewBox="0 0 20 20"
          fill="grey"
        >
          <path
            fillRule="evenodd"
            d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="font-bold"> THE NEWS HUB</h1>
      </div>
      <div className="flex items-center">

        
        <a herf="#" className="px-2 font-bold uppercase  ">Popular News</a>
        <a herf="#" className="px-2 font-bold uppercase">About Us</a>
        <a  herf="#" className="px-2 font-bold  uppercase">Contact Us</a>
      </div>
      <div><label class="relative block">
  <span className="sr-only">Search</span>
  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20"></svg>
  </span>
  <input className="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label></div>
    </div>
  );
};
