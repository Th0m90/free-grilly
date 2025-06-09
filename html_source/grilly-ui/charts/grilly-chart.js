const ctx = document.getElementById('tempChart').getContext('2d');

const tempChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['12:00', '12:05', '12:10', '12:15'],
    datasets: [{
      label: 'Temperatuur (°C)',
      data: [22.4, 22.6, 22.9, 23.1],
      borderColor: '#007bff',
      tension: 0.3,
      fill: false
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});
