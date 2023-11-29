const toggleSwitch = document.querySelector('#dark-mode-switch');

// Function to set the theme based on user preference
function setTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
  // You can also save the user's preference to local storage here for persistence
}

// Function to toggle the theme when the switch is clicked
function toggleTheme() {
  if (toggleSwitch.checked) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

// Event listener for the switch
toggleSwitch.addEventListener('change', toggleTheme);

// Check the user's preference from local storage (if available)
const userPreference = localStorage.getItem('theme');
if (userPreference) {
  setTheme(userPreference);
} else {
  // Detect system preference for dark mode (optional)
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
    toggleSwitch.checked = true;
  }
}
