import React from "react";
import "./SalesStatistics.scss";
import {Chart, Pie } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import { Sendbtn } from "../SendBtn/SendBtn";

function SalesStatistics() {
    const data = {
        labels: ["ПВХ Профиль", "Алюминиевый Профиль", "Алюминиевый Профиль",],
        datasets: [
          {
            label: "My First dataset",
            data: [22, 37, 31],
            backgroundColor: ["#4A5675", "#5DA8D2", "#40DF94"],
          },
        ],
      };
      const options = {
        // cutoutPercentage: 60,
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
          <h2 className="top__clients--heading">Статистика продаж</h2>
          <div className="top__clients--export">
            <Sendbtn />
          </div>
        </div>
        <Pie data={data} options={options}  width="300px" />
      </div>
    </div>
  );
}

export default SalesStatistics;