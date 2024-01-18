let signupBtn = document.getElementById("signup");
let loginBtn = document.getElementById("login");

let signupContainer = document.querySelector(`.signup-container`);
let loginContainer = document.querySelector(`.login-container`);

loginBtn.addEventListener("click", () => {
  signupContainer.classList.add(`slide-up`);
  loginContainer.classList.remove(`slide-up`);
});

signupBtn.addEventListener("click", () => {
  loginContainer.classList.add(`slide-up`);
  signupContainer.classList.remove(`slide-up`);
});
