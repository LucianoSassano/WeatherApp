import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getLocationWeatherFiveDays } from  "../../services/WheaterApi.js";
import "./FiveDayForecast.css";

const FiveDayForecast = () => {
  const [xLabels, setxDays] = useState([]);
  const [yData, setyData] = useState([]);

  useEffect(() => {
    getLocationWeatherFiveDays("Paris").then((results) => {

    console.log(results);
      let dateArray = [];
      let tempArray = [];

      results.list.forEach((timestamp) => {
  
        let unix_timestamp = timestamp.dt;

        let t = new Date(unix_timestamp * 1000);

        
        let day = t.getDate();
        let month = t.getMonth();
        let hour = t.getHours();
        month = month + 1;

    
        let formattedDate = " " + day + "/" + month + " - " + hour + "hs";
        let temp = timestamp.main.temp;

        dateArray.push(formattedDate);
        tempArray.push(temp);
      });
      setxDays(dateArray);
      setyData(tempArray);
    });
  }, []);

  return (
    <>
      <div className="fiveDay-container">
        
        <div className="canvas-container">
          <Line
            data={{
              labels: xLabels,
              datasets: [
                {
                  label: " average temperature over the day in celcius",
                  data: yData,
                  backgroundColor:"rgba(255, 99, 132, 0.2)",
                  borderColor:"rgba(32, 217, 189, 1)",

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

export default FiveDayForecast;
