import { useState } from "react";
import { SiCashapp } from "react-icons/si";
import { FaCircleUser } from "react-icons/fa6";
import MenuList from "./menuList";
import Button from "../button";
import { Link } from "react-router-dom";

function NavBar() {
  const [authorized, setAuthorized] = useState("authorized1");
  const [clicked, setClicked] = useState(false);
  return (
    <header className="flex justify-between items-center px-5 relative min-h-[90px]">
      <Link to={"/"} className="flex items-end">
        <SiCashapp size={40} />
        <p className="font-black text-4xl md:block hidden">CashFlow Manager</p>
        <p className="font-black text-4xl md:hidden">CFM</p>
      </Link>
      {authorized === "authorized" ? (
        <FaCircleUser
          size={50}
          onClick={() => setClicked(!clicked)}
          className=" cursor-pointer"
        />
      ) : (
        <Button path="/login" text={"Log in"} />
      )}
      {clicked && <MenuList />}
    </header>
  );
}

export default NavBar;
