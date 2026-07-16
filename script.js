/* =========================================================\n   00. 中英文切换\n========================================================= */\n\nconst translations = {\n  zh: {\n    "nav.about":"关于","nav.skills":"能力图谱","nav.projects":"项目","nav.experience":"经历","nav.lab":"实验室","nav.contact":"联系",\n    "hero.eyebrow":"面向真实世界构建工程系统","hero.subtitle":"嵌入式系统 · FPGA · 机器人 · AI 应用","hero.description":"我关注硬件、通信、软件与产品之间的连接，并将复杂系统转化为可运行、可验证、可交付的工程产品。","hero.projectsButton":"查看项目","hero.skillsButton":"浏览能力图谱",\n    "about.title":"从底层通信到完整产品","about.paragraph1":"我是一名系统型工程师，工作内容跨越嵌入式软件、FPGA、高速通信、机器人控制与产品开发。","about.paragraph2":"我擅长把分散的硬件、协议、算法和服务整合为完整系统，并关注可靠性、实时性、可维护性与实际交付效果。",\n    "skills.title":"技术能力图谱","skills.embeddedTab":"嵌入式","skills.roboticsTab":"机器人","skills.productTab":"产品工程",\n    "projects.title":"代表项目","projects.worldcup.title":"FIFA 世界杯中文数据平台","projects.worldcup.description":"集成赛程、球队、球员、技术统计、实时比分与出线计算，采用微信小程序、Node.js、SQLite/MySQL 和 WebSocket 构建。","projects.fpga.title":"FPGA 高速 LVDS 数据链路","projects.fpga.description":"构建 FT232H 到 FPGA、再到外设的高速数据通路，实现帧同步、协议解析、CRC 校验与多模块分发。","projects.robot.title":"ROS2 移动机器人底层控制系统","projects.robot.description":"面向四轮移动机器人构建电机控制、编码器反馈、CAN 通信、里程计、TF 与 Nav2 导航闭环。","projects.ai.title":"长篇小说 AI 编写器","projects.ai.description":"面向 800–1000 章长篇小说，构建角色、世界观、剧情线、章节状态与多模型 API 调度系统。",\n    "common.viewCase":"查看项目详情","experience.title":"工程经历","lab.title":"正在构建",\n    "contact.title":"建立连接","contact.description":"适合交流的方向包括嵌入式系统、FPGA、高速通信、机器人平台、AI 工具与技术产品合作。","contact.emailButton":"发送邮件","contact.location":"中国南京","contact.status":"开放技术交流与合作"\n  },\n  en: {\n    "nav.about":"About","nav.skills":"System Map","nav.projects":"Projects","nav.experience":"Experience","nav.lab":"Lab","nav.contact":"Contact",\n    "hero.eyebrow":"ENGINEERING SYSTEMS FOR THE REAL WORLD","hero.subtitle":"Embedded Systems · FPGA · Robotics · AI Applications","hero.description":"I connect hardware, communication, software and product engineering, transforming complex systems into reliable and deliverable solutions.","hero.projectsButton":"Explore Projects","hero.skillsButton":"View System Map",\n    "about.title":"From Low-Level Communication to Complete Products","about.paragraph1":"I am a systems engineer working across embedded software, FPGA, high-speed communication, robotics control and product development.","about.paragraph2":"I integrate hardware, protocols, algorithms and services into complete systems, with an emphasis on reliability, real-time performance, maintainability and delivery.",\n    "skills.title":"Technology System Map","skills.embeddedTab":"Embedded","skills.roboticsTab":"Robotics","skills.productTab":"Product",\n    "projects.title":"Selected Work","projects.worldcup.title":"FIFA World Cup Chinese Data Platform","projects.worldcup.description":"A WeChat Mini Program integrating fixtures, teams, players, statistics, live scores and qualification calculations, powered by Node.js, SQLite/MySQL and WebSocket.","projects.fpga.title":"FPGA High-Speed LVDS Data Link","projects.fpga.description":"A high-speed data path from FT232H to FPGA and peripheral devices, featuring frame synchronization, protocol parsing, CRC verification and multi-module distribution.","projects.robot.title":"ROS2 Mobile Robot Control System","projects.robot.description":"A four-wheel mobile robot control stack covering motor control, encoder feedback, CAN communication, odometry, TF and Nav2 navigation.","projects.ai.title":"Long-Form AI Novel Writing System","projects.ai.description":"An extensible system for 800–1000 chapter novels, including character memory, worldbuilding, plot lines, chapter state and multi-model API orchestration.",\n    "common.viewCase":"View Case Study","experience.title":"Engineering Experience","lab.title":"Current Lab",\n    "contact.title":"Build a Connection","contact.description":"Open to discussions and collaboration in embedded systems, FPGA, high-speed communication, robotics platforms, AI tools and technical products.","contact.emailButton":"Send Email","contact.location":"Nanjing, China","contact.status":"Open to Collaboration"\n  }\n};\n\nconst languageButton=document.getElementById("languageButton");\nconst languageLabel=document.getElementById("languageLabel");\nlet currentLanguage=localStorage.getItem("siteLanguage")||"zh";\nfunction updateLanguage(language){\n  currentLanguage=language;\n  document.documentElement.lang=language==="zh"?"zh-CN":"en";\n  document.querySelectorAll("[data-i18n]").forEach((el)=>{\n    const text=translations[language][el.dataset.i18n];\n    if(text) el.textContent=text;\n  });\n  languageLabel.textContent=language==="zh"?"EN":"中文";\n  languageButton.setAttribute("aria-label",language==="zh"?"Switch to English":"切换为中文");\n  localStorage.setItem("siteLanguage",language);\n}\nlanguageButton.addEventListener("click",()=>updateLanguage(currentLanguage==="zh"?"en":"zh"));\nupdateLanguage(currentLanguage);\n\n/* =========================================================
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
