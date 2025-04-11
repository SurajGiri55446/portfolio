
const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark"); // Toggle dark mode on the root element
});



// Check for saved theme preference on page load
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

// Toggle theme and save the preference
themeToggleButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  
  // Save the theme preference in localStorage
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
  }
});
