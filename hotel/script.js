// Chart.js configuration
const ctx = document.getElementById('occupancyChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Occupancy Rate',
      data: [65, 72, 76, 82, 88, 90, 85],
      backgroundColor: '#55678a'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true, max: 100 }
    }
  }
});
