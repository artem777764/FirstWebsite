const headers1 = document.querySelectorAll("h1");
headers1[0].textContent = "Добро пожаловать на наш самый лучший в этом мире сайт!";

const headers3 = document.querySelectorAll("h3");
headers3.forEach(element => {
    element.style.color = "red";
});

const paragraph = document.querySelectorAll("p");
paragraph[0].textContent = "Моя новая мотивационная речь о том, почему Bootstrap мне не понравился...";

const video = document.getElementsByClassName("video");
video[0].style.display = "none";