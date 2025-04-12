function validateForm() {
    const firstName = document.getElementById("Firstname").value.trim();
    const lastName = document.getElementById("Lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("Password").value;
    const confirmPassword = document.getElementById("Confirmpassword").value;
    const message = document.getElementById("message");

    message.style.color = "red";
    message.innerText = "";

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      message.innerText = "All fields are required.";
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      message.innerText = "Please enter a valid email address.";
      return;
    }

    if (password !== confirmPassword) {
      message.innerText = "Passwords do not match.";
      return;
    }

    if (password.length < 8) {
      message.innerText = "Password must be at least 8 characters.";
      return;
    }

    message.style.color = "green";
    message.innerText = "Account created successfully!";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("button"); // Replace with your button's ID
    submitButton.addEventListener("click", validateForm);
});