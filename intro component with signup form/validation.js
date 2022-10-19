const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');
let firstError = document.querySelector('#first-name-error');
let lastError = document.querySelector('#last-name-error');
let emailError = document.querySelector('#email-error');
let passwordError = document.querySelector('#password-error')

let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function formValidator(e){
    e.preventDefault();
    firstValidator()
    lastValidator()
    emailValidator()
    passwordValidator()
}
function firstValidator(){
    if(firstName.value ==""){
        return firstError.textContent ="Please fill this field"
    }
}

function lastValidator(){
    if(lastName.value ==""){
        return lastError.textContent ="Please fill this field"
    }
}
function emailValidator() {
    if(!email.value.match(pattern)){
        emailError.textContent ="Please write a correct email"
    }else if(email.value == ""){
        emailError.textContent = "kindly drop you email address"
    }
}
function passwordValidator(){
    if(password.value ==""){
        return passwordError.textContent ="Please fill this field"
    }
}