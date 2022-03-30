import React from "react";
import "./NumberOfClientsCharts.scss";
import {Chart, Doughnut } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import { Sendbtn } from "../SendBtn/SendBtn";

function NumberOfClientsCharts() {
  const data = {
    labels: ["ПВХ Профиль", "ПВХ Профиль", "ПВХ Профиль", "ПВХ Профиль"],
    datasets: [
      {
        label: "My First dataset",
        data: [30, 40, 15, 60],
        backgroundColor: ["#00A859", "#EC6666", "#95B2FF", "#4A5675"],
      },
    ],
  };
  const options = {
    cutoutPercentage: 60,
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
        color: ["#00A859", "#EC6666", "#97AFFA", "#4A5675"],
        display: true,
        align: "middle",
        backgroundColor: "#fff",
        borderRadius: 50,
        borderWidth: 20,
        padding: 1,
        font: {
          weight: 900,
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
          <h2 className="top__clients--heading">Количество клиентов</h2>
          <div className="top__clients--export">
            <Sendbtn />
          </div>
        </div>
        <Doughnut data={data} options={options} width="300px" />
        <div className="doughnut-title">
          <div className="donuttitle">Всего</div>
          <div className="donutsubtitle">21 546</div>
        </div>
      </div>
    </div>
  );
}

export default NumberOfClientsCharts;
