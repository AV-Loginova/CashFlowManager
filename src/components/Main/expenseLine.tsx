import React from "react";

interface Props {
  props: {
    id: number;
    name: string;
    expense: number;
    maxExpense: number;
    color: string;
  };
}

function ExpenseLine({ props }: Props) {
  return (
    <tbody>
      <tr className="">
        <td className={`w-3/5 capitalize`}>{props.name}</td>
        <td className="pr-2 text-center">{props.expense}</td>
        <td className="text-sm italic">of</td>
        <td className="text-[#a8a8a8] text-center px-2">{props.maxExpense}</td>
        <td className="text-sm italic pr-2">left</td>
        <td
          className={`text-center ${
            props.maxExpense - props.expense < 0 && "text-[red]"
          }`}
        >
          {props.maxExpense - props.expense}
        </td>
      </tr>
    </tbody>
  );
}

export default ExpenseLine;
