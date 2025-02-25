// Author Name: Nirmal Patel, Jalpan Patel
// Group 9
// Date: 21/2/25
// Description: This is the auth javascript file for the website which shows
// it will fetch the data from users .json file and then checklist

// it will wait until the page is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // it will get references to the login form, message area, and the login button
    const loginForm = document.getElementById("loginForm");
    const messageArea = document.getElementById("messageArea");
    const loginButton = document.getElementById("submitButton");

    // it will add a click event listener to the login button
    loginButton.addEventListener("click", async function () {
        // Get the values entered in the username and password fields
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // it will check if username or password is empty
        if (!username || !password) {
            showMessage("⚠️ Please enter both username and password!", "danger");
            return; // Stop the function if fields are empty
        }

        try {
            console.log("Fetching users.json...");
            // it will Fetch the user data from the JSON file
            const response = await fetch("./data/users.json");

            if (!response.ok) {
                throw new Error("Failed to load user data.");
            }
            // Parse the JSON data into a JavaScript object
            const users = await response.json();
            console.log("Users loaded:", users);

            // Find the user in the JSON data that matches the entered username and the password
            const user = users.find(user =>
                user.username.toLowerCase() === username.toLowerCase() &&
                user.password === password
            );
            // If a matching user is found
            if (user) {
                console.log("✅ Login successful for:", user.username);

                // Store login session
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("username", username);

                // Redirect to homepage
                window.location.href = "index.html";
            } else {
                // it will If no matching user is found, show an error messages
                console.log("❌ Invalid credentials");
                showMessage("❌ Invalid username or password!", "danger");
            }
        } catch (error) {
            // it will handle any error that occur during the process
            console.error("Login error:", error);
            showMessage("❌ An error occurred. Please try again later.", "danger");
        }
    });
    // Function to display a message to the user
    function showMessage(message, type) {
        // it will create a message div with the appropriate styling
        messageArea.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
        // it will Make the message area visible
        messageArea.classList.remove("d-none");
    }
});
