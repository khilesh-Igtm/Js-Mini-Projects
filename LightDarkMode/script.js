// Get reference to the button element with the id 'themeToggleBtn'
const themeToggleBtn = document.getElementById('themeToggleBtn');

// Get reference to the body element
const body = document.body;

// Function to set button background color based on body class
function setButtonBackgroundColor() {
  // Check if body has 'dark' class
  if (body.classList.contains('dark')) {
    // If body is in dark mode, set button background color to light
    themeToggleBtn.style.backgroundColor = '#f0f0f0'; // Light background
    themeToggleBtn.style.color = '#333'; // Dark text color
  } else {
    // If body is in light mode, set button background color to dark
    themeToggleBtn.style.backgroundColor = '#333'; // Dark background
    themeToggleBtn.style.color = '#f0f0f0'; // Light text color
  }
}

// Check initial body background color and set button background color accordingly rgb(240,240,240) is light gray near to white
if (getComputedStyle(body).getPropertyValue('background-color') === 'rgb(240, 240, 240)') {
  // so if the light background os there then call this function and function will handle other things
  setButtonBackgroundColor(); // Call the function to set initial button background color
}

// Event listener for button click
themeToggleBtn.addEventListener('click', () => {
  // Toggle the 'dark' class on the body element
  body.classList.toggle('dark');
  // Call the function to set button background color based on body class
  setButtonBackgroundColor();
});
