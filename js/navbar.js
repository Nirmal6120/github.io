// Author Name: Nirmal Patel, Jalpan Patel
// Group 9
// Date: 21/2/25
// Description: This is the navbar javascript file for the website .



document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
        document.getElementById("loginNav").classList.add("d-none");
        document.getElementById("logoutNav").classList.remove("d-none");
    }

    document.getElementById("logoutNav").addEventListener("click", function() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        window.location.href = "login.html"; // Redirect to login page
    });
});
