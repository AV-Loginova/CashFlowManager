import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <section className="w-full flex justify-center">
      <form className="flex flex-col w-[300px] border-1 gap-2 p-5 pt-3 rounded-md bg-[#222222] shadow-md">
        <p className="text-white font-bold text-2xl text-center">SignUp</p>
        <label htmlFor="name" className="text-white">
          Name:
        </label>
        <input id="name" type="text" className="rounded-md p-1"></input>
        <label htmlFor="email" className="text-white">
          Email:
        </label>
        <input id="email" type="email" className="rounded-md p-1"></input>
        <label htmlFor="password" className="text-white">
          Password:
        </label>
        <input id="password" type="password" className="rounded-md p-1"></input>
        <p className="text-[13px] text-white">
          Already have an account?{" "}
          <Link className="text-white underline" to={"/login"}>
            Login
          </Link>
        </p>
        <button
          onClick={handleSubmit}
          type="submit"
          className="text-[#222222] bg-white py-1 rounded-md "
        >
          SignUp
        </button>
      </form>
    </section>
  );
}

export default SignUp;
