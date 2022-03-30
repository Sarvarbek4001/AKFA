import React from "react";
import "./StatisticsPieChart.scss";
import {Chart, Pie } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import { Sendbtn } from "../SendBtn/SendBtn";

function StatisticsPieChart() {
  const data = {
    labels: ["ПВХ Профиль", "Алюминиевый Профиль", "Фурнитура","Прочие детали"],
    datasets: [
      {
        label: "My First dataset",
        data: [22, 37, 31,41],
        backgroundColor: ["#4A7561", "#87CDFF", "#00A859","#6AF4B3"],
      },
    ],
  };
  const options = {
    layout: {
      padding: 5,
    },
    legend: {
      display: true,
      position: "right",
      align: "middle",
      lineHeight: 845,
      labels: {
        boxWidth: 70,
        padding: 9,      
      },
      datalabels: {
        color: ["#00A859", "#EC6666", "#97AFFA", "#4A5675"],
        backgroundColor: "#fff",
      },
    },
    plugins: {
      datalabels: {
        color: ["#4A5675", "#469BCB", "#00A859"],
        display: true,
        align: "middle",
        backgroundColor: "#fff",
        borderRadius: 50,
        borderWidth: 20,
        padding: 1,
        font: {
          weight: 600,
          size: 18,
        },
        formatter: (value) => {
          return value + "";
        },
      },
    },
  };
  return (
    <div className="App">
      <div className="top__clients content" style={{ width: "590px" }}>
        <div className="top__clients--hero">
          <h2 className="top__clients--heading">Статистика</h2>
          <div className="top__clients--export">
            <Sendbtn />
          </div>
        </div>
        <Pie data={data} options={options}  width="300px" />
      </div>
    </div>
  );
}

export default StatisticsPieChart;