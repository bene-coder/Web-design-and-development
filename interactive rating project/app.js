const ratingPage = document.querySelector('.rating-page');
const thankYou = document.querySelector('.thank-you');
const submit = document.querySelector('#submit');
const rateBtn = document.querySelectorAll("#rating")
let selectedRate = document.querySelector('#selected')

let rating;

rateBtn.forEach((element) => 
    element.addEventListener('click', () => {
        rating = element.innerText
        check4Active()
    })    
)

function check4Active() {
    rateBtn.forEach(element => rating == element.innerText ? element.classList.add("active") : element.classList.remove("active"))
}

submit.addEventListener('click', () => {
    if (!rating) {
        alert("You've not rated us...");
        return;
    }
    ratingPage.style.visibility = "hidden";
    thankYou.style.visibility = "visible";
    selectedRate.innerText = rating;
});