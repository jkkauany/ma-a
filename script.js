const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.8;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  stars.push({ x, y });
  draw();
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw lines
  ctx.strokeStyle = "#ffffff99";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  for (let i = 0; i < stars.length - 1; i++) {
    ctx.moveTo(stars[i].x, stars[i].y);
    ctx.lineTo(stars[i + 1].x, stars[i + 1].y);
  }
  ctx.stroke();

  // Draw stars
  for (let star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.shadowColor = "#ffffff";
    ctx.shadowBlur = 10;
    ctx.fill();
  }
}

document.getElementById("clearBtn").addEventListener("click", () => {
  stars = [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
