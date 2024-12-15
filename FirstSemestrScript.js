const button1 = document.getElementById("button1");
const button = document.getElementById("lecture");
const lectureTable = document.getElementById("LectureTable");

button1.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const secondSemesterPractices = [
    "Базовое бэкенд-приложение",
    "HTTP-запросы",
    "JSON и работа с ним",
    "HTTP-ответы",
    "Проектирование API",
    "Роутинг и его настройка",
    "NoSQL базы данных",
    "Обеспечение авторизации и доступа пользователей",
    "Работа сторонних сервисов уведомления и авторизации",
    "Основы ReactJS",
    "Работа с компонентами динамической DOM",
    "Использование хуков в React",
    "Пропуск",
    "Основы микросервисной архитектуры",
    "Разработка классических модулей веб-приложений",
    "Разработка классических модулей веб-приложений"
  ];  

const secondSemesterButton = document.getElementById("SecondSemest");
secondSemesterButton.addEventListener("click", () => {
    const rows = document.querySelectorAll("#SemestrTable tbody tr");
    secondSemesterPractices.forEach((topic, index) => {
        const cells = rows[index].querySelectorAll("td");
        cells[1].textContent = topic;
    });
});

button.addEventListener("click", () => {
    if (lectureTable.style.display === "none" || !lectureTable.style.display) {
        lectureTable.style.display = "block";
        lectureTable.style.opacity = "0";
        lectureTable.style.height = "0";

        setTimeout(() => {
            lectureTable.style.opacity = "1";
            lectureTable.style.height = `${lectureTable.scrollHeight}px`;
        }, 10);
    } else {
        lectureTable.style.opacity = "0";
        lectureTable.style.height = "0";

        setTimeout(() => {
            lectureTable.style.display = "none";
        }, 1000);
    }
});