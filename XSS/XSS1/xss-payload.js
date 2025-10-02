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

  // Ширина экрана для расчёта позиций
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Создаём 10 элементов
  for (let i = 0; i < 10; i++) {
    const el = document.createElement('div');
    el.textContent = messages[i % messages.length];
    el.style.cssText = `
      color: ${colors[i % colors.length]};
      font: bold 24px Arial, sans-serif;
      position: absolute;
      left: ${20 + (i * (screenWidth / 10))}px;
      top: -60px;
      margin: 0;
      text-shadow: 0 0 8px currentColor;
      white-space: nowrap;
      opacity: 0.95;
    `;
    container.appendChild(el);

    // Начальная позиция и скорость
    let y = -60;
    const speed = 3 + Math.random() * 2; // от 3 до 5 пикс/кадр — выше средней

    // Движение сверху вниз
    setInterval(() => {
      y += speed;
      el.style.top = y + 'px';
      if (y > (window.innerHeight || 700) + 100) {
        y = -60;
        // Случайный сдвиг по горизонтали при перезапуске (опционально)
        // el.style.left = Math.random() * (screenWidth - 100) + 'px';
      }
    }, 40); // ~25 кадров/сек

    // Мигание цветами
    setInterval(() => {
      el.style.color = colors[Math.floor(Math.random() * colors.length)];
    }, 200 + i * 30);
  }
})();
