
// Charts with Chart.js

// Bar Chart
const barCtx = document.getElementById("barChart").getContext("2d");
new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["October", "November", "December"],
    datasets: [{
      label: "Visitors",
      data: [0, 0, 0],
      backgroundColor: "#2e6f57"
    }]
  },
  options: { responsive: true, maintainAspectRatio: false }
});

// Line Chart
const lineCtx = document.getElementById("lineChart").getContext("2d");
new Chart(lineCtx, {
  type: "line",
  data: {
    labels: ["10AM", "11AM", "12PM", "1PM", "2PM"],
    datasets: [{
      label: "Sales",
      data: [0, 0, 0, 0, 0],
      borderColor: "#2e6f57",
      fill: false
    }]
  },
  options: { responsive: true, maintainAspectRatio: false }
});

// Doughnut Charts
function createDoughnut(id, value, color) {
  new Chart(document.getElementById(id), {
    type: "doughnut",
    data: {
      datasets: [{
        data: [value, 100 - value],
        backgroundColor: [color, "#eaeaea"]
      }]
    },
    options: { cutout: "0%", plugins: { legend: { display: false } } }
  });
}

createDoughnut("doughnut1", 0, "#f4a261");
createDoughnut("doughnut2", 0, "#e76f51");
createDoughnut("doughnut3", 0, "#2a9d8f");
