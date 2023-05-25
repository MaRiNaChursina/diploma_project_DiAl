import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export default function Grafic ({days, kol}){
    

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'График получения заказов из сайта',
          },
        },
      };
    const labels=days;
    const data ={
        labels,
        datasets: [
            {
              label: 'Количество заказов',
              data: kol,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            
          ],
        };
    
    return(
        <>
        <Line options={options} data={data}/>
        </>
    )
}