document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const loader = document.querySelector(".loader-wrapper");
    const content = document.querySelector(".container");

    loader.classList.add("fade-out");
    content.classList.add("visible");

    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 2200);
});

const canvas = document.getElementById("snow-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let flakes = [];

function createFlakes() {
  for (let i = 0; i < 350; i++) {
    flakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 4 + 1,
      d: Math.random() * 1.5 + 1
    });
  }
}

function drawFlakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < flakes.length; i++) {
    let f = flakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveFlakes();
}

let angle = 0;

function moveFlakes() {
  angle += 0.01;
  for (let i = 0; i < flakes.length; i++) {
    let f = flakes[i];
    f.y += Math.pow(f.d, 2) + 1;
    f.x += Math.sin(angle) * 0.5;

    if (f.y > canvas.height) {
      flakes[i] = { x: Math.random() * canvas.width, y: 0, r: f.r, d: f.d };
    }
  }
}

function animateFlakes() {
  drawFlakes();
  requestAnimationFrame(animateFlakes);
}

createFlakes();
animateFlakes();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  flakes = [];
  createFlakes();
});