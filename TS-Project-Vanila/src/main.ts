import './style.css';
// 1. Define the exact shape of our expected data payload
interface AuthPayload {
  email: string;
  password?: string;
}

// 2. Select the DOM Elements and cast them to their strict HTML types
const loginForm = document.querySelector<HTMLFormElement>("#login-form");
const emailInput = document.querySelector<HTMLInputElement>("#email-field");
const passInput = document.querySelector<HTMLInputElement>("#password-field");
const statusMsg = document.querySelector<HTMLParagraphElement>("#status-message");

// 3. Ensure all elements actually exist before attaching listeners
if (loginForm && emailInput && passInput && statusMsg) {

  // 4. Listen for the form submission
  loginForm.addEventListener("submit", (event: SubmitEvent) => {

    // Crucial: Prevents the browser from refreshing the page on submit
    event.preventDefault();

    // 5. Construct our payload from the current input values
    const payload: AuthPayload = {
      email: emailInput.value,
      password: passInput.value
    };

    statusMsg.textContent = "Verifying credentials...";
    statusMsg.style.color = "blue";

    // 6. Simulate a network request to an enterprise backend
    setTimeout(() => {
      if (payload.email === "a@g.com" && payload.password === "123") {
        statusMsg.textContent = "Authentication successful! Booting dashboard...";
        statusMsg.style.color = "green";
        // Here is where you would eventually route to the Dashboard component
        window.location.href = "/dashboard.html";
      } else {
        statusMsg.textContent = "Error: Invalid credentials or unauthorized access.";
        statusMsg.style.color = "red";
      }
    }, 1000); // 1-second artificial delay to simulate network latency
  });

} else {
  console.error("Critical DOM elements are missing. Check index.html IDs.");
}