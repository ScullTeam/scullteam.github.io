window.addEventListener("DOMContentLoaded", () => {
  const texts = [
    "TEST_XSS_2025 <b>CHECK</b>",
    "Второй текст",
    "Третий текст",
    "Четвёртый текст",
    "Пятый текст"
  ];

  const palettes = [
    ["#ff3b30","#ff9500","#ffd600"],
    ["#00d2ff","#0077ff","#0033cc"],
    ["#ff66cc","#ff33aa","#ff0066"],
    ["#7affc2","#29e0a1","#00b36b"],
    ["#ffd166","#ff7b00","#ff3b3b"]
  ];

  texts.forEach((text, i) => {
    const el = document.createElement("div");
    el.className = "floating " + (i % 3 === 0 ? "large" : i % 3 === 1 ? "medium" : "small");
    el.textContent = text; // безопасно — вставляем как текст

    el.style.left = (10 + i * 18) + "%";
    el.style.animationDuration = `${5 + i*1.2}s, ${1.6 + i*0.2}s`;
    el.style.animationDelay = `${i*0.3}s, ${i*0.3}s`;

    document.body.appendChild(el);

    // Мигаем цветами через JS
    let ci = 0;
    const pal = palettes[i % palettes.length];
    el.style.color = pal[0];
    setInterval(() => {
      ci = (ci + 1) % pal.length;
      el.style.color = pal[ci];
    }, 400 + i*150);
  });
});
