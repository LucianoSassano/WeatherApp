import React, { useState, useEffect } from "react";
import "./DataVisualization.css";
import Navbar from "../../components/Navbar/Navbar";
import { Line } from "react-chartjs-2";
import { getLocationWeatherWeekly } from "../../services/WheaterApi";

const DataVisualization = () => {
  const [xLabels, setxDays] = useState([]);
  const [yData, setyData] = useState([]);

  useEffect(() => {
    getLocationWeatherWeekly("Paris").then((results) => {
      let dateArray = [];
      let tempArray = [];

      results.daily.forEach((timestamp) => {
  
        let unix_timestamp = timestamp.dt;

        let t = new Date(unix_timestamp * 1000);

        let day = t.getDate();
        let month = t.getMonth();
        month = month + 1;

        let formattedDate = " " + day + "/" + month + "";
        let temp = timestamp.temp.day;

        dateArray.push(formattedDate);
        tempArray.push(temp);
      });
      setxDays(dateArray);
      setyData(tempArray);
    });
  }, []);

  return (
    <>
      <div className="dataVisualzation-container">
        <Navbar className="dataVisualzation-nav" />
        <div className="canvas-container">
          <Line
            data={{
              labels: xLabels,
              datasets: [
                {
                  label: " average temperature over the day in celcius",
                  data: yData,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],

                  borderWidth: 2,
                },
              ],
            }}
            height={200}
            width={200}
            options={{
              responsive : true,
              responsiveAnimationDuration: 100,
              maintainAspectRatio: false,
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: false,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default DataVisualization;
