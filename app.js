let digit = document.querySelector(".digit");
const h1 = document.querySelector("h1");
const lower = document.querySelector(".lower");
const addTo = document.querySelector(".addTo");
let number = 0;
lower.addEventListener("click", () => {
    const minus = --number;
    digit.innerText = minus;
    if (number < 0) {
        digit.style.color = "red";
    }
    if (number === 0) {
        digit.style.color = "black";
    }
});
addTo.addEventListener("click", () => {
    const plus = ++number;
    digit.innerText = plus;
    digit.style.fontSize = "6rem";
    if (number > 0) {
        digit.style.color = "green";
    }
    if (number === 0) {
        digit.style.color = "black";
    }
});
