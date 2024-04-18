import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CategoryLine from "./categoryLine";
import { RootState } from "../../store/store";

function CategoryPage() {
  const { category } = useParams();
  const categories = useSelector((state: RootState) => state.category);
  const isExists = categories.some((cat) => cat.name == category);
  const currCategory = categories.find((cat) => cat.name == category);
  console.log(currCategory);
  return (
    <div className="w-full flex flex-col items-center justify-start h-full">
      {isExists ? (
        <table className="max-w-[80vw] bg-[#F5F5F5] rounded-xl shadow-lg">
          <caption className="uppercase text-3xl font-bold p-[50px]">
            {category}
          </caption>
          <thead className="w-full font-bold py-[100px]">
            <tr className="">
              <td className="px-[5vw] pt-[50px] pb-[20px]">Your comment:</td>
              <td className="px-[5vw] pt-[50px] pb-[20px]">Expense:</td>
            </tr>
          </thead>
          <tbody className="w-full">
            {currCategory?.data.map((cat) => (
              <CategoryLine props={cat} />
            ))}
            <tr className="">
              <td colSpan={2} className="px-[5vw] pb-[10px] text-right">
                <b>Total:</b> {currCategory?.expense}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="px-[5vw] pb-[10px] text-right">
                <b>Limit:</b> {currCategory?.maxExpense}
              </td>
            </tr>
            <tr>
              <td
                colSpan={2}
                className={`px-[5vw] pb-[30px] text-right ${
                  currCategory?.maxExpense && currCategory?.expense
                    ? currCategory?.maxExpense - currCategory?.expense < 0 &&
                      "text-[red]"
                    : ""
                }`}
              >
                <b className="text-black">Remaining amount:</b>
                {currCategory?.maxExpense && currCategory?.expense
                  ? currCategory?.maxExpense - currCategory?.expense
                  : 0}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h1>Category does not exist </h1>
      )}
    </div>
  );
}

export default CategoryPage;
