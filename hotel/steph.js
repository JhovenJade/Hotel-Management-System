// Sidebar active state
const navLinks = document.querySelectorAll(".sidebar nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Search filter for reservations
const searchInput = document.querySelector(".header input");
const tableRows = document.querySelectorAll(".orders table tr");

searchInput.addEventListener("keyup", function () {
  const searchText = this.value.toLowerCase();
  tableRows.forEach((row, index) => {
    if (index === 0) return; // skip header
    const guest = row.cells[1].textContent.toLowerCase();
    if (guest.includes(searchText)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

// Toast for upgrade button
const upgradeBtn = document.querySelector(".upgrade");
upgradeBtn.addEventListener("click", () => {
  showToast("CRM Pro Features Coming Soon 🚀");
});

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => document.body.removeChild(toast), 300);
  }, 2500);
}
