var form = document.querySelector('#form');
var email = document.querySelector('#email');
var invalid = document.querySelector('.invalid');
var input = document.querySelector('.input');
var button = document.querySelector('.button');
let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var invalid = document.querySelector('.invalid');


button.addEventListener('click', validator)
function validator(e){
    e.preventDefault();
    if(!email.value.match(pattern)){
        invalid.style.display = "block"
    }else if(email.value == ""){
        invalid.textContent = "kindly drop you email address"
    }
}





