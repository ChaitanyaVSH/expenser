import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from "./BarGraph.module.css";

const noOfIpos = {
    labels: ["2019", "2020", "2021"],
    datasets: [
      {
        label: '# of incomes',
        data: [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 30) + 1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const noOfCompanies = {
    labels: ["2019", "2020", "2021"],
    datasets: [
      {
        label: '# of incomes for last month',
        data: [Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 75) + 1, Math.floor(Math.random() * 150) + 1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const avgMarketReturns = {
    labels: ["2019", "2020", "2021"],
    datasets: [
      {
        label: '%of Avg income percentage',
        data: [Math.floor(Math.random() * 15) + 1, Math.floor(Math.random() * 7) + 1, Math.floor(Math.random() * 22) + 1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const BarGraph = () => {
    return (
        <div>
            <hr />
            <div className={styles.graphs}>
                <Bar
                    data={noOfIpos}
                />
                <Bar
                    data={noOfCompanies}
                />
                <Bar
                    data={avgMarketReturns}
                />
            </div>
        </div>
    )
}

export default BarGraph;