var form = document.querySelector('#form');
var email = document.querySelector('#email')
var inputArea = document.querySelector('.input-area');
var text = document.querySelector('#text');
var submitBtn = document.querySelector('.submit-btn')
let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var invalid = document.querySelector('.invalid')


submitBtn.addEventListener('click', Validator)
function Validator(e) {
    e.preventDefault();
        if(email.value.match(pattern)){
        text.textContent = "The email you added is correct";
        text.style.color = "green";
        invalid.style.display = 'none';
        }else if(email.value == ""){
            invalid.style.display = 'none';
            text.textContent = "";
        }
       else{
        invalid.style.display = 'block';
        text.textContent = "The email you added is wrong";
        
    }
   
}