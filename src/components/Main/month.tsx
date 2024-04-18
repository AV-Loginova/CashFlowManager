import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

function Month() {
  const [date, setDate] = useState(new Date());
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  function handleNextMonth() {
    const nextMonthDate = new Date(date.getFullYear(), date.getMonth() + 1);
    setDate(nextMonthDate);
  }

  function handlePrevMonth() {
    const prevMonthDate = new Date(date.getFullYear(), date.getMonth() - 1);
    setDate(prevMonthDate);
  }

  return (
    <section className="flex">
      <IoIosArrowRoundBack
        size={30}
        className="cursor-pointer"
        onClick={handlePrevMonth}
      />
      <p className="capitalize text-center text-xl">
        {month}, {year}
      </p>
      <IoIosArrowRoundForward
        size={30}
        className="cursor-pointer"
        onClick={handleNextMonth}
      />
    </section>
  );
}

export default Month;
