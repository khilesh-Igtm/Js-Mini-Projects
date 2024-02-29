// Define an array to store user data
var users = [];

// Function to render the user list in the HTML table
function renderUsers() {
    // Get the tbody element where user data will be displayed
    var userList = document.getElementById("user-list");
    // Clear any existing content in the user list
    userList.innerHTML = "";

    // Loop through each user in the users array
    users.forEach(function(user, index) {
        // Create a new row in the table
        var row = userList.insertRow();
        // Insert cells for name, email, and action buttons in the row
        var nameCell = row.insertCell(0);
        var emailCell = row.insertCell(1);
        var actionCell = row.insertCell(2);

        // Populate the cells with user data and action buttons
        nameCell.innerHTML = user.name;
        emailCell.innerHTML = user.email;
        // The action buttons call editUser() and deleteUser() functions with the user index
        actionCell.innerHTML = `<button onclick="editUser(${index})">Edit</button>
                               <button onclick="deleteUser(${index})">Delete</button>`;
    });
}

// Function to add a new user to the users array and render the updated user list
function addUser() {
    // Get input values for name and email from the form
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");

    // Create a new user object with the input values
    var newUser = {
        name: nameInput.value,
        email: emailInput.value
    };

    // Add the new user to the users array
    users.push(newUser);
    // Render the updated user list
    renderUsers();

    // Clear the input fields after adding the user
    nameInput.value = "";
    emailInput.value = "";
}

// Function to edit a user's information
function editUser(index) {
    // Get the user object at the specified index
    var user = users[index];
    // Get input fields for name and email
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");

    // Populate input fields with the user's data for editing
    nameInput.value = user.name;
    emailInput.value = user.email;

    // Remove the edited user from the array
    users.splice(index, 1);
    // Render the updated user list
    renderUsers();
}

// Function to delete a user from the users array
function deleteUser(index) {
    // Remove the user at the specified index from the array
    users.splice(index, 1);
    // Render the updated user list
    renderUsers();
}

// Execute the renderUsers function when the window finishes loading to display the initial user list
window.onload = function() {
    renderUsers();
};
