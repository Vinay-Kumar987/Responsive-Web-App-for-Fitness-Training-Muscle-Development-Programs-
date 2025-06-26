document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;

            // Simple authentication logic for demo purposes
            const storedEmail = localStorage.getItem("userEmail");
            const storedPassword = localStorage.getItem("userPassword");

            if (email === storedEmail && password === storedPassword) {
                localStorage.setItem("userName", "User"); // Change as per your requirement
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid email or password");
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = registerForm.name.value;
            const email = registerForm.email.value;
            const password = registerForm.password.value;

            // Simple registration logic for demo purposes
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);

            window.location.href = "dashboard.html";
        });
    }
});
