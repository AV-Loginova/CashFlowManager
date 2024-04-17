import React from "react";
import { Link } from "react-router-dom";

function MenuList() {
  return (
    <nav className="absolute right-2 text-right top-[100px] rounded-lg shadow-lg px-5 py-2">
      <ul className="flex flex-col gap-2">
        <li className="border-b pb-2 border-[#c9c9c9]">
          <Link to={"#"}>Your statistics</Link>
        </li>
        <li className="border-b pb-2 border-[#c9c9c9]">
          <Link to={"#"}>Profile</Link>
        </li>
        <li className="text-[red] pb-2">
          <Link to={"#"}>Log Out</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuList;
