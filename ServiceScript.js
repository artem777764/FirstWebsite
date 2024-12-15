const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const orderText = document.getElementById("orderText");
const orderType = document.getElementById("type")
const modal = document.getElementById("modal");
const done = document.getElementById("done");
const doneText = document.querySelector(".doneText p");

function openModal(text, textType) {
    orderText.textContent = text;
    orderType.value = textType;
    modal.style.display = "block";
}

button1.onclick = function() {
    openModal("Заказ Сайта-Визитки", "Visit");
}

button2.onclick = function() {
    openModal("Заказ Корпоративного Сайта", "Corp");
}

button3.onclick = function() {
    openModal("Заказ Интернет-Магазина", "Shop");
}

button4.onclick = function(event) {
    event.preventDefault();
    if (modal.checkValidity()) {
        modal.style.display = "none";
        done.style.display = "flex";
        submitForm();
    }
    else {
        modal.reportValidity();
    }
}

button5.onclick = function() {
    done.style.display = "none";
}

button6.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function printData(formData) {
    for (let [key, value] of formData.entries()) {
        console.log(key, ": [", value, "]");
    }
}

function submitForm() {
    const form = document.getElementById("modal");
    let formData = new FormData(form);

    printData(formData);
}

button4.addEventListener("click", () => {
    doneText.style.animation = "colorChange 2s infinite";
});