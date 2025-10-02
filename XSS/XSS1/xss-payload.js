(function() {
  document.body.innerHTML = '';
  document.body.style.background = 'black';

  const container = document.createElement('div');
  container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;overflow:hidden';
  document.body.appendChild(container);

  const messages = ['XSS', 'ATTACK', 'ACTIVE', '!!!'];
  const colors = ['lime', 'red', 'cyan', 'yellow', 'magenta', 'orange'];

  messages.forEach((text, i) => {
    const el = document.createElement('h2');
    el.textContent = text;
    el.style.cssText = `
      color: ${colors[i]};
      text-align: center;
      font: bold 28px Arial;
      position: absolute;
      width: 100%;
      top: -80px;
      margin: 0;
      text-shadow: 0 0 10px currentColor;
    `;
    container.appendChild(el);

    let y = -80;
    setInterval(() => {
      y += 2;
      el.style.top = y + 'px';
      if (y > window.innerHeight + 100) y = -80;
    }, 50);

    setInterval(() => {
      el.style.color = colors[Math.floor(Math.random() * colors.length)];
    }, 300 + i * 100);
  });
})();
