/* =========================================================
   01. 鼠标光晕
========================================================= */

const cursorGlow = document.getElementById("cursorGlow");

window.addEventListener("pointermove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

/* =========================================================
   02. 滚动进入动画
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

/* =========================================================
   03. 数字递增
========================================================= */

const counters = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      const target = Number(element.dataset.count);
      const duration = 1200;
      const startedAt = performance.now();

      function updateCounter(now) {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.floor(target * eased);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target;
        }
      }

      requestAnimationFrame(updateCounter);
      counterObserver.unobserve(element);
    });
  },
  {
    threshold: 0.5,
  }
);

counters.forEach((counter) => counterObserver.observe(counter));

/* =========================================================
   04. 能力图谱切换
========================================================= */

const mapTabs = document.querySelectorAll(".map-tab");
const mapPanels = document.querySelectorAll(".map-panel");

mapTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.target;

    mapTabs.forEach((item) => item.classList.remove("active"));
    mapPanels.forEach((panel) => panel.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(targetId).classList.add("active");
  });
});

/* =========================================================
   05. 移动端菜单
========================================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});

/* =========================================================
   06. Canvas 动态节点背景
========================================================= */

const canvas = document.getElementById("networkCanvas");
const context = canvas.getContext("2d");

let canvasWidth = 0;
let canvasHeight = 0;
let nodes = [];

const config = {
  nodeCountDesktop: 72,
  nodeCountMobile: 34,
  maxDistance: 150,
  speed: 0.18,
};

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;

  canvas.width = canvasWidth * dpr;
  canvas.height = canvasHeight * dpr;
  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;

  context.setTransform(dpr, 0, 0, dpr, 0, 0);
  createNodes();
}

function createNodes() {
  const count =
    canvasWidth < 700
      ? config.nodeCountMobile
      : config.nodeCountDesktop;

  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    vx: (Math.random() - 0.5) * config.speed,
    vy: (Math.random() - 0.5) * config.speed,
    radius: Math.random() * 1.4 + 0.4,
  }));
}

function animateNetwork() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  nodes.forEach((node) => {
    node.x += node.vx;
    node.y += node.vy;

    if (node.x < 0 || node.x > canvasWidth) node.vx *= -1;
    if (node.y < 0 || node.y > canvasHeight) node.vy *= -1;

    context.beginPath();
    context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    context.fillStyle = "rgba(114, 220, 255, 0.65)";
    context.fill();
  });

  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < config.maxDistance) {
        const alpha = 1 - distance / config.maxDistance;

        context.beginPath();
        context.moveTo(nodes[i].x, nodes[i].y);
        context.lineTo(nodes[j].x, nodes[j].y);
        context.strokeStyle = `rgba(114, 220, 255, ${alpha * 0.12})`;
        context.lineWidth = 1;
        context.stroke();
      }
    }
  }

  requestAnimationFrame(animateNetwork);
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
animateNetwork();

/* =========================================================
   07. Hero 节点点击反馈
========================================================= */

document.querySelectorAll(".node").forEach((node) => {
  node.addEventListener("click", () => {
    const label = node.dataset.label;

    node.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.12)" },
        { transform: "scale(1)" },
      ],
      {
        duration: 420,
        easing: "ease-out",
      }
    );

    console.log(`Selected system node: ${label}`);
  });
});
