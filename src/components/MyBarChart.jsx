import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import HashLoader from 'react-spinners/HashLoader';

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MyBarChart = () => {
  const [loading, setLoading] = useState(true);

  // Simular una carga de datos
  useEffect(() => {
    // Aquí podrías hacer una llamada a una API o cualquier otra operación asíncrona
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simular 2 segundos de carga
  }, []);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
};

return (
  <div>
    {loading ? (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <HashLoader  size={100} color="#36d7b7" loading={loading}  />
      </div>
    ) : (
      <Bar data={data} options={options} />
    )}
  </div>
);
};

export default MyBarChart;