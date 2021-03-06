import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { getLocationWeatherFiveDays } from  "../../services/WheaterApi.js";
import "../FiveDayForecast/FiveDayForecast.css";

const FiveDayForecast = (props) => {
  const [xLabels, setxDays] = useState([]);
  const [yData, setyData] = useState([]);
  const [weekAvgTemps, setWeekAvgTemps] = useState([]);

  useEffect(() => {
    getLocationWeatherFiveDays(props.locationSearch).then((results) => {
  
      let dateArray = [];
      let tempArray = [];
      let weekAvgSum = 0;

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
        weekAvgSum = weekAvgSum + parseInt(temp) ;
      });

      let i;
      let supArray = [];
      for(i=0;i<40;i++){
        supArray.push(weekAvgSum / 40);
        
      }
      setWeekAvgTemps(supArray);
      setxDays(dateArray);
      setyData(tempArray);
    });
  }, [props.locationSearch]);

  return (
    <>
      <div className="fiveDay-container">
        
        <div className="canvas-container">
          <Line
            data={{
              labels: xLabels,
              datasets: [
                {
                  label: "avg temp in hour on C°",
                  data: yData,
                  backgroundColor:"rgba(255, 99, 132, 0.2)",
                  borderColor:"rgba(255, 99, 132, 1)",

                  borderWidth: 2,
                },
                {
                  label: "avg week temp in C°",
                  data: weekAvgTemps,
                  backgroundColor:"rgba(65, 191, 208, 0.1)",
                  borderColor: [
                    
                    "rgba(65, 191, 208, 1)",
                    
                  ],

                  borderWidth: 2,
                },
              ],
            }}
           
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
