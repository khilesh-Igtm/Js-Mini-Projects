// Get references to the login and signup forms
var loginForm = document.getElementById("login-form");
var signupForm = document.getElementById("signup-form");

// Function to toggle between login and signup forms
function toggleForm(formType) {
    if (formType === "login") {
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
    } else {
        signupForm.classList.add("active");
        loginForm.classList.remove("active");
    }
}

// Initially show the login form
toggleForm("login");

// Event listener to switch forms when radio buttons are clicked
document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener("change", function() {
        if (this.id === "login") {
            toggleForm("login");
        } else {
            toggleForm("signup");
        }
    });
});
