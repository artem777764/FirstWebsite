const button1 = document.getElementById("button1");

button1.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}