// Get the dropdown button and dropdown content
var dropdownBtn = document.getElementById("dropdownBtn");
var dropdownContent = document.getElementById("dropdownContent");

// Toggle the dropdown content when the button is clicked
dropdownBtn.onclick = function() {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// Close the dropdown when the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#dropdownBtn')) {
        dropdownContent.style.display = "none";
    }
}
