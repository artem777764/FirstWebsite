const button1 = document.getElementById("button1");
const header = document.getElementById("welcome");
const imgElement = document.getElementById("photo");
const paragraph = document.getElementById("paragraph");

button1.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

header.addEventListener("click", function() {
    alert("Вы кликнули на заголовок - так держать!");
  });

imgElement.addEventListener("mouseover", () => {
    imgElement.style.transition = "transform 0.3s ease, width 0.3s ease, height 0.3s ease";
    imgElement.style.transform = "rotate(360deg)";
    imgElement.style.width = imgElement.offsetWidth * 1.1 + "px";
    imgElement.style.height = imgElement.offsetHeight * 1.1 + "px";
});

imgElement.addEventListener("mouseout", () => {
    imgElement.style.transition = "transform 0.3s ease, width 0.3s ease, height 0.3s ease";
    imgElement.style.transform = "rotate(0deg)";
    imgElement.style.width = imgElement.offsetWidth / 1.1 + "px";
    imgElement.style.height = imgElement.offsetHeight / 1.1 + "px";
});

imgElement.addEventListener("click", () => {
    imgElement.src = "Рустам Уралович.jpg";
    imgElement.alt = "Любимый преподаватель";
});

imgElement.addEventListener("dblclick", () => {
    alert("Не налегай, у меня не так много любимых преподавателей");
});

header.addEventListener("mouseover", () => {
    header.style.transform = "scale(1.1)";
});

header.addEventListener("mouseout", () => {
    header.style.transform = "scale(1)";
});

paragraph.addEventListener("click", () => {
  paragraph.style.transition = "color 0.5s ease";
  paragraph.style.color = "red";
});