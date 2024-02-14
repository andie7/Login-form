const signupBtn = document.getElementById(`signup`);
const loginBtn = document.getElementById(`login`);

const signupContainer = document.querySelector(`.signup-container`);
const loginContainer = document.querySelector(`.login-container`);

loginBtn.addEventListener("click", () => {
  signupContainer.classList.add(`slide-up`);
  loginContainer.classList.remove(`slide-up`);
});

signupBtn.addEventListener("click", () => {
  loginContainer.classList.add(`slide-up`);
  signupContainer.classList.remove(`slide-up`);
});
