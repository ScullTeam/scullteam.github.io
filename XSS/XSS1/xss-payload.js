(function() {
  // Очистка и фон
  document.body.innerHTML = '';
  document.body.style.background = 'black';

  // Контейнер
  const container = document.createElement('div');
  container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;overflow:hidden;pointer-events:none';
  document.body.appendChild(container);

  // Тексты и цвета
  const messages = ['XSS', 'HACKED', 'ALERT', 'PWNED', 'DANGER', 'SECURITY', 'BREACH', 'EXPLOIT', 'ACCESS', 'GRANTED'];
  const colors = ['lime', 'red', 'cyan', 'yellow', 'magenta', 'orange', 'white', '#0ff', '#f0f', '#0f0'];

  // Ширина экрана
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const laneCount = 10;                         // количество дорожек
  const laneWidth = screenWidth / laneCount;    // ширина каждой дорожки

  // Создаём 10 элементов
  for (let i = 0; i < laneCount; i++) {
    const el = document.createElement('div');
    el.textContent = messages[i % messages.length];
    el.style.cssText = `
      color: ${colors[i % colors.length]};
      font: bold 24px Arial, sans-serif;
      position: absolute;
      top: -60px;
      margin: 0;
      text-shadow: 0 0 8px currentColor;
      white-space: nowrap;
      opacity: 0.95;
    `;
    container.appendChild(el);

    // Центрируем по дорожке
    const textWidth = el.offsetWidth || 80;
    el.style.left = (i * laneWidth + (laneWidth - textWidth) / 2) + 'px';

    // Начальная позиция и скорость
    let y = -60;
    const speed = 3 + Math.random() * 2; // 3–5 пикс/кадр

    // Движение сверху вниз
    setInterval(() => {
      y += speed;
      el.style.top = y + 'px';
      if (y > (window.innerHeight || 700) + 100) {
        y = -60;

        // случайный сдвиг внутри дорожки
        const tw = el.offsetWidth || 80;
        el.style.left = (i * laneWidth + Math.random() * (laneWidth - tw)) + 'px';
      }
    }, 40);

    // Мигание цветами
    setInterval(() => {
      el.style.color = colors[Math.floor(Math.random() * colors.length)];
    }, 200 + i * 30);
  }
})();
