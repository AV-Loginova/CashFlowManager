import React from "react";
import Button from "../button";
import { categories } from "../../fakeData/fakeData";

function AddExpense() {
  return (
    <section className="w-full flex flex-1 items-center flex-col ">
      <form className="flex flex-col shadow-md w-[300px] h-[50vh] items-center gap-4 rounded-lg border-[0.5px] border-[#f0f0f0] p-5">
        <p className="font-bold mb-5 text-2xl">Add new expense</p>
        <label htmlFor="cat">Choose category:</label>
        <select
          id="cat"
          className="outline-none rounded-2xl border-2 border-black px-7 py-2"
        >
          {categories.map((cat) => (
            <option key={cat.id}>{cat.name.toUpperCase()}</option>
          ))}
        </select>
        <label htmlFor="num">Add sum:</label>
        <input
          id="num"
          className="outline-none rounded-2xl border-2 border-black px-5 py-2"
          type="number"
        />
        <Button path="/" text="Submit" />
      </form>
    </section>
  );
}

export default AddExpense;
