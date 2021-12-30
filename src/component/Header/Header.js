import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-around bg-green-100 py-4">
      <div>LOGO</div>
      <div className="flex">
        <div className="px-2">MENU</div>
        <div className="px-2">MENU</div>
        <div className="px-2">MENU</div>
      </div>
      <div>Search</div>
    </div>
  );
};
