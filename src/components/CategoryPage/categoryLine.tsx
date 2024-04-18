import React from "react";

interface Props {
  props: {
    price: number;
    comment: string;
  };
}

function CategoryLine({ props }: Props) {
  return (
    <tr>
      <td className="px-[5vw] pb-[10px]">{props.comment}</td>
      <td className="px-[5vw] pb-[10px]">{props.price}</td>
    </tr>
  );
}

export default CategoryLine;
