import { categories } from "../../fakeData/fakeData";
import ExpenseLine from "./expenseLine";
import Button from "../button";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, plugins } from "chart.js";
import Month from "./month";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
Chart.register(ArcElement);
Chart.register(plugins);

function Main() {
  const category = useSelector((state: RootState) => state.category);

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom" as "bottom",
        align: "start" as "start",
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.8)",
        bodyColor: "white",
        titleColor: "white",
        bodyFontSize: 14,
      },
    },
  };
  const data = {
    datasets: [
      {
        data: category.map((cat) => cat.expense),
        backgroundColor: category.map((cat) => cat.color),
      },
    ],
    labels: category.map((cat) => cat.name.toUpperCase()),
  };

  return (
    <main className="w-full flex flex-col items-center flex-1 self-start">
      <h1 className="text-center font-bold text-3xl mb-3">
        Your expense tracker
      </h1>
      <Month />
      <section className="flex mt-[3vh] md:flex-row flex-col w-full mb-10 gap-4 md:px-[50px]">
        <div className="w-full h-[400px] flex justify-center">
          <Doughnut data={data} className="w-full" options={options} />
        </div>
        <div className="md:w-[60%] flex flex-col justify-start md:px-[100px] bg-[#f5f5f5] rounded-2xl shadow-md p-2">
          <p className="font-bold text-2xl text-center my-[50px] ">
            Categories
          </p>
          <table className="w-full">
            {category.map((cat) => (
              <ExpenseLine key={cat.id} props={cat} />
            ))}
          </table>
        </div>
      </section>
      <div className="flex gap-3">
        <Button path="/addexpense" text={"Add expense"} />
        <Button path="/addcategory" text={"Add category"} />
      </div>
    </main>
  );
}

export default Main;
