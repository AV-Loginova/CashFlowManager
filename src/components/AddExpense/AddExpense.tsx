import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { actions as actionCategory } from "../../store/category/category.slice";
import { RootState } from "../../store/store";

function AddExpense() {
  const category = useSelector((state: RootState) => state.category);
  const [comment, setComment] = useState("");
  const [cat, setCat] = useState(category[0]?.name);
  const [sum, setSum] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    switch (name) {
      case "cat":
        setCat(value);
        break;
      case "sum":
        setSum(parseInt(value));
        break;
      case "comment":
        setComment(value);
        break;
    }
  }
  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const selectedCategory = category.find((categ) => categ.name === cat);
    if (selectedCategory) {
      const newData = {
        comment: comment,
        price: sum,
      };
      dispatch(
        actionCategory.editCategory({
          id: selectedCategory.id,
          newData,
        })
      );
    }
    setSum(0);
    setComment("");
    console.log(category);
    navigate("/");
  }

  useEffect(() => {
    console.log("Category updated:", category);
  }, [category]);
  return (
    <section className="w-full flex flex-1 items-center flex-col ">
      <form className="flex flex-col shadow-md w-[300px] items-center gap-4 rounded-lg border-[0.5px] border-[#f0f0f0] p-5">
        <p className="font-bold mb-5 text-2xl">Add new expense</p>
        <label htmlFor="cat">Choose category:</label>
        <select
          onChange={handleChange}
          id="cat"
          className="outline-none rounded-2xl border-2 border-black px-7 py-2"
          name="cat"
        >
          {category.map((cat) => (
            <option value={cat.name} key={cat.id}>
              {cat.name.toUpperCase()}
            </option>
          ))}
        </select>
        <label htmlFor="num">Add sum:</label>
        <input
          onChange={handleChange}
          id="num"
          className="outline-none rounded-2xl border-2 border-black px-5 py-2"
          type="number"
          name="sum"
        />
        <label htmlFor="desc">Add comment:</label>

        <input
          onChange={handleChange}
          id="desc"
          className="outline-none rounded-2xl border-2 border-black px-5 py-2"
          type="text"
          name="comment"
        />
        <button
          onClick={handleSubmit}
          className="bg-[#222222] text-white text-xl py-2 w-[180px] rounded-[30px]"
        >
          <Link to={"#"}>Submit</Link>
        </button>
      </form>
    </section>
  );
}

export default AddExpense;
