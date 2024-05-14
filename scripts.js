const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submit = document.querySelector("#submit");
const warning = document.querySelector(".warning");

submit.addEventListener("click",() => {
    passwordValue = password.value;
    confirmPasswordValue = confirmPassword.value;

    if (passwordValue !== confirmPasswordValue) {
        password.classList.add("non-matching");
        confirmPassword.classList.add("non-matching");

        const passwordWarning = document.createElement("p");
        passwordWarning.innerText = "Passwords do not match";
        warning.appendChild(passwordWarning);
    } 
})