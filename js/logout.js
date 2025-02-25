// Author Name: Nirmal Patel, Jalpan Patel
// Group 9
// Date: 22/2/25
// Description: This is the logout javascript file for the website which shows
// the code which helps to logout


document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logoutButton");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("username");
            window.location.href = "login.html";
        });
    }
});
