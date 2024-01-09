const password = document.querySelector('#password');
const confirmPassword = document.querySelector("#confirm-password");
const submitButton = document.querySelector('button[type=\'submit\']');

console.log(password, confirmPassword,submitButton);

submitButton.addEventListener('click', (e) => {
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add("invalid");
        console.log("should be invalid");
    } else{
        confirmPassword.classList.remove("invalid");
        console.log("all is fine");
    }
})
