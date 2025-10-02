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

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const textSize = 24;
  const padding = 10;
  const cellWidth = 100;
  const cellHeight = 40;

  // Считаем сетку
  const cols = Math.floor(screenWidth / cellWidth);
  const rows = Math.floor(screenHeight / cellHeight);

  // Создаём массив свободных ячеек
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      cells.push({x: c * cellWidth, y: r * cellHeight});
    }
  }

  // Функция случайного выбора ячейки и удаления её из списка
  function pickCell() {
    if (cells.length === 0) return null;
    const idx = Math.floor(Math.random() * cells.length);
    const cell = cells.splice(idx, 1)[0];
    return cell;
  }

  // Создаём очень много элементов
  const totalTexts = 80; // можно увеличить
  const elements = [];

  for (let i = 0; i < totalTexts; i++) {
    const el = document.createElement('div');
    el.textContent = messages[i % messages.length];
    el.style.cssText = `
      color: ${colors[i % colors.length]};
      font: bold ${textSize}px Arial, sans-serif;
      position: absolute;
      margin: 0;
      text-shadow: 0 0 8px currentColor;
      white-space: nowrap;
      opacity: 0.95;
    `;

    const cell = pickCell();
    if (!cell) break; // больше нет свободных ячеек
    el.style.left = cell.x + 'px';
    el.style.top = cell.y - Math.random() * screenHeight + 'px'; // рандомно выше экрана

    container.appendChild(el);
    elements.push({el, cell, speed: 1 + Math.random() * 3});
  }

  // Анимация
  setInterval(() => {
    elements.forEach(obj => {
      let y = parseFloat(obj.el.style.top);
      y += obj.speed;
      if (y > screenHeight) {
        y = -cellHeight;
      }
      obj.el.style.top = y + 'px';
    });
  }, 30);

  // Мигание цветами
  setInterval(() => {
    elements.forEach(obj => {
      obj.el.style.color = colors[Math.floor(Math.random() * colors.length)];
    });
  }, 150);
//xss
})();
