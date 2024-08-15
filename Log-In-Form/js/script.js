let logInContainer = document.querySelector(".log-In");
let signInContainer = document.querySelector(".sign-Up");


let createAccountBtn = document.querySelector("#create-account-btn");
let logInSpan = document.querySelector("#log-in-span");
let logInBtn = document.querySelector("#log-in-Btn");
let signInBtn = document.querySelector("#sign-up-Btn");

createAccountBtn.addEventListener("click", () => {
    signInContainer.classList.add("active");
    logInContainer.classList.remove("active");
});

signInBtn.addEventListener("click", () => {
    logInContainer.classList.add("active");
    signInContainer.classList.remove("active");
});

logInSpan.addEventListener("click", () => {
    logInContainer.classList.add("active");
    signInContainer.classList.remove("active");
});
