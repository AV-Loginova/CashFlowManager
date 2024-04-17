import React from "react";
import Button from "../button";

function AddCategory() {
  return (
    <section className="w-full flex flex-1 items-center flex-col ">
      <form className="flex flex-col shadow-md w-[300px] h-[55vh] items-center gap-3 rounded-lg border-[0.5px] border-[#f0f0f0] p-5">
        <p className="font-bold mb-5 text-2xl">Add new category</p>
        <label htmlFor="cat">Name category:</label>
        <input
          id="cat"
          className="outline-none rounded-2xl border-2 border-black px-5 py-1"
          type="text"
        />
        <label htmlFor="num">Add Limit:</label>
        <input
          id="num"
          className="outline-none rounded-2xl border-2 border-black px-5 py-1"
          type="number"
        />
        <label htmlFor="color">Choose color:</label>
        <input id="color" type="color" />
        <Button path="/" text="Submit" />
      </form>
    </section>
  );
}

export default AddCategory;
