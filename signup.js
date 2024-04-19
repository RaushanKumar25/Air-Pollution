const loginText = 
	document.querySelector(".title-text .login"); 
const loginForm = 
	document.querySelector("form.login"); 
const loginBtn = 
	document.querySelector("label.login"); 
const signupBtn = 
	document.querySelector("label.signup"); 
const signupLink = 
	document.querySelector("form .signup-link a"); 
signupBtn.onclick = () => { 
loginForm.style.marginLeft = "-50%"; 
loginText.style.marginLeft = "-50%"; 
}; 
loginBtn.onclick = () => { 
loginForm.style.marginLeft = "0%"; 
loginText.style.marginLeft = "0%"; 


}; 
signupLink.onclick = () => { 
signupBtn.click(); 
return false; 
};

  // const loginForm2 = document.querySelector(".l");
  // loginForm2.addEventListener("click",()=>{
  //     window.location.href = "/index.html";
  //     console.log("3");
  // })

// document.addEventListener("DOMContentLoaded", function() {
//   const loginForm = document.querySelector(".login");
//   const signupForm = document.querySelector(".signup");

//   // Function to handle form submission
//   const handleFormSubmission = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior

//     // Determine which form is being submitted
//     const form = event.target;
//     const action = form.getAttribute("action");

//     // Perform action based on form submission
//     if (action === "login") {
//       // Perform login action (e.g., validate credentials)
//       // Open index.html after successful login
//       window.location.href = "/index.html";
//     } else if (action === "signup") {
//       // Perform signup action (e.g., create new user)
//       // Open index.html after successful signup
//       window.location.href = "/index.html";
//     }
//   };

//   // Add event listeners to form submissions
//   loginForm.addEventListener("submit", handleFormSubmission);
//   signupForm.addEventListener("submit", handleFormSubmission);
// });

// document.addEventListener("DOMContentLoaded", function() {
//   const loginForm = document.querySelector(".login");
//   const signupForm = document.querySelector(".signup");

//   // Function to handle form submission
//   const handleFormSubmission = (event) => {
//     event.preventDefault(); // Prevent default form submission behavior

//     // Redirect to index.html after successful form submission
//     window.location.href = "/index.html";
//   };

//   // Add event listeners to form submissions
//   loginForm.addEventListener("submit", handleFormSubmission);
//   signupForm.addEventListener("submit", handleFormSubmission);
// });
