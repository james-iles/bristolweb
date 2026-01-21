// Bristol Web Dev - Main JS

// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle-btn');

const darkText = "I was born in the dark";
const lightText = "Let there be light";

// Check for saved theme preference or default to dark
function getTheme() {
  return localStorage.getItem('theme') || 'dark';
}

function setTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleBtn.textContent = lightText;
  } else {
    document.documentElement.removeAttribute('data-theme');
    themeToggleBtn.textContent = darkText;
  }
  localStorage.setItem('theme', theme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = getTheme();
  setTheme(savedTheme);
});

// Toggle theme on button click
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
}
