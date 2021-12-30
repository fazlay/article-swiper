import React from "react";

const RightSideBar = () => {
  return (
    <>
      <div className="px-4 w-1/4 bg-slate-100 mt-16 h-1/2 rounded-lg
       ">
      <h1 className="text-black-600 text-xl font-bold text-center border-b-2 pt-4"> TOP 5 CONTRIBUTOR</h1>

        <div className="flex items-center py-4 mx-2">
          <img
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="ml-4 text-left">
            <h1 className="text-black-700 text-lg font-bold "> Tom Frank</h1>
            <h1 className="text-black-700 text-sm font-thin"> 54 Articles</h1>
          </div>
        </div>
        <div className="flex items-center py-4 mx-2">
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
          <div className="ml-4 text-left">
            <h1 className="text-black-700 text-lg font-bold "> Gilbert Gillan</h1>
            <h1 className="text-black-700 text-sm font-thin"> 36 Articles</h1>
          </div>
        </div>
        <div className="flex items-center py-4 mx-2">
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
          <div className="ml-4 text-left">
            <h1 className="text-black-700 text-lg font-bold "> Casaddy lify</h1>
            <h1 className="text-black-700 text-sm font-thin"> 10 Articles</h1>
          </div>
        </div>
        <div className="flex items-center py-4 mx-2">
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
          <div className="ml-4 text-left">
            <h1 className="text-black-700 text-lg font-bold "> Collen Ruby</h1>
            <h1 className="text-black-700 text-sm font-thin"> 34 Articles</h1>
          </div>
        </div>
        
        <div className="flex items-center py-4 mx-2">
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
          <div className="ml-4 text-left">
            <h1 className="text-black-700 text-lg font-bold "> Nascrin Hua</h1>
            <h1 className="text-black-700 text-sm font-thin"> 52 Articles</h1>
          </div>
        </div>
       
      
      
        
      </div>
    </>
  );
};

export default RightSideBar;
