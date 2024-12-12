function showMessage(message) {
    console.log(message);
}

function logCurrentTime()
{
    let date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    console.log(`Текущее время: ${hour}:${minute}:${second}`);
}

function changeBackgroundColor(color) {
    const header = document.querySelector("header");
    header.style.background = color;
}

function resetBackgroundColor() {
    const header = document.querySelector("header");
    header.style.background = "white";
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    const currentDisplay = getComputedStyle(element).display;
    if (currentDisplay === "none") element.style.display = "block";
    else element.style.display = "none";
}

function updateHeadingWithUTM() {
    const utmTerm = new URLSearchParams(window.location.search).get("utm_term");
    const heading = document.querySelector("h1");
    if (utmTerm) heading.textContent = utmTerm;
}

showMessage("Скрипт загружен");
logCurrentTime();
document.addEventListener('DOMContentLoaded', function() {
    resetBackgroundColor();
    changeBackgroundColor('red');
    toggleVisibility(".userInfoPicture");
    updateHeadingWithUTM();
})