import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { actions as actionCategory } from "../../store/category/category.slice";
import { RootState } from "../../store/store";

function AddCategory() {
  const [name, setName] = useState("");
  const [maxExpense, setMaxExpense] = useState(0);
  const [color, setColor] = useState("");
  const category = useSelector((state: RootState) => state.category);
  const isExist = category.some((cat) => cat.name === name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    switch (name) {
      case "cat":
        setName(value);
        break;
      case "num":
        setMaxExpense(parseInt(value));
        break;
      case "color":
        setColor(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const newCategory = {
      id: new Date().getTime(),
      name: name,
      maxExpense: maxExpense,
      color: color,
      expense: 0,
      data: [],
    };
    if (!isExist) {
      setName("");
    }
    dispatch(actionCategory.addCategory(newCategory));
    navigate("/");
  }

  return (
    <section className="w-full flex flex-1 items-center flex-col ">
      <form className="flex flex-col shadow-md w-[300px] h-[55vh] items-center gap-3 rounded-lg border-[0.5px] border-[#f0f0f0] p-5">
        <p className="font-bold mb-5 text-2xl">Add new category</p>
        <label htmlFor="cat">Name category:</label>
        <input
          value={name}
          onChange={handleChange}
          id="cat"
          className="outline-none rounded-2xl border-2 border-black px-5 py-1"
          type="text"
          name="cat"
        />
        {isExist && (
          <p className="text-[red] mt-[-10px] text-sm">
            Category already exists
          </p>
        )}

        <label htmlFor="num">Add Limit:</label>
        <input
          onChange={handleChange}
          id="num"
          className="outline-none rounded-2xl border-2 border-black px-5 py-1"
          type="number"
          name="num"
        />
        <label htmlFor="color">Choose color:</label>
        <input onChange={handleChange} id="color" type="color" name="color" />
        <button
          onClick={handleSubmit}
          className="bg-[#222222] text-white text-xl py-2 w-[180px] rounded-[30px]"
        >
          <Link to="#">Submit</Link>
        </button>
      </form>
    </section>
  );
}

export default AddCategory;
