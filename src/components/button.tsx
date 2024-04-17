import React from "react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  path: string;
}

function Button({ text, path }: Props) {
  return (
    <button className="bg-[#222222] text-white text-xl py-2 w-[180px] rounded-[30px]">
      <Link to={path}>{text}</Link>
    </button>
  );
}

export default Button;
