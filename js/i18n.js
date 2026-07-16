(() => {
  "use strict";

  const STORAGE_KEY = "kqSiteLanguageV4";
  const FALLBACK_TRANSLATIONS = {"zh":{"meta.title":"KQ Systems Lab｜孔庆翔个人网站","meta.description":"孔庆翔的个人工程作品网站，展示嵌入式系统、FPGA、机器人与 AI 应用项目。","nav.about":"关于","nav.skills":"能力图谱","nav.projects":"项目","nav.experience":"经历","nav.lab":"实验室","nav.contact":"联系","hero.eyebrow":"面向真实世界构建工程系统","hero.subtitle":"嵌入式系统 · FPGA · 机器人 · AI 应用","hero.description":"我关注硬件、通信、软件与产品之间的连接，并将复杂系统转化为可运行、可验证、可交付的工程产品。","hero.projectsButton":"查看项目","hero.skillsButton":"浏览能力图谱","about.title":"从底层通信到完整产品","about.paragraph1":"我是一名系统型工程师，工作内容跨越嵌入式软件、FPGA、高速通信、机器人控制与产品开发。","about.paragraph2":"我擅长把分散的硬件、协议、算法和服务整合为完整系统，并关注可靠性、实时性、可维护性与实际交付效果。","skills.title":"技术能力图谱","skills.embeddedTab":"嵌入式","skills.roboticsTab":"机器人","skills.productTab":"产品工程","projects.title":"代表项目","projects.worldcup.title":"FIFA 世界杯中文数据平台","projects.worldcup.description":"集成赛程、球队、球员、技术统计、实时比分与出线计算，采用微信小程序、Node.js、SQLite/MySQL 和 WebSocket 构建。","projects.fpga.title":"FPGA 高速 LVDS 数据链路","projects.fpga.description":"构建 FT232H 到 FPGA、再到外设的高速数据通路，实现帧同步、协议解析、CRC 校验与多模块分发。","projects.robot.title":"ROS2 移动机器人底层控制系统","projects.robot.description":"面向四轮移动机器人构建电机控制、编码器反馈、CAN 通信、里程计、TF 与 Nav2 导航闭环。","projects.ai.title":"长篇小说 AI 编写器","projects.ai.description":"面向 800–1000 章长篇小说，构建角色、世界观、剧情线、章节状态与多模型 API 调度系统。","common.viewCase":"查看项目详情","experience.title":"工程经历","lab.title":"正在构建","contact.title":"建立连接","contact.description":"适合交流的方向包括嵌入式系统、FPGA、高速通信、机器人平台、AI 工具与技术产品合作。","contact.emailButton":"发送邮件","contact.location":"中国南京","contact.status":"开放技术交流与合作","hero.meta.locationLabel":"所在地","hero.meta.locationValue":"中国南京","hero.meta.focusLabel":"技术方向","hero.meta.focusValue":"机器人 · 嵌入式 · AI","hero.visual.system":"系统","hero.visual.online":"在线","hero.visual.liveSignal":"实时信号","hero.visual.streaming":"传输中","hero.scroll":"向下滚动查看","about.kicker":"关于","about.stats.directions":"核心技术方向","about.stats.projects":"系统级项目经验","about.stats.delivery":"工程落地导向","skills.kicker":"技术图谱","skills.embedded.header":"嵌入式系统","skills.embedded.title":"面向实时控制与可靠通信的嵌入式系统","skills.embedded.description":"覆盖 MCU、RTOS、Linux、设备驱动、通信协议与系统调试，强调硬件约束下的稳定运行。","skills.fpga.header":"FPGA 系统","skills.fpga.title":"高速数据链路与可编程逻辑设计","skills.fpga.description":"聚焦 Verilog、LVDS、RGMII、MAC、时钟域处理、帧协议与链路可靠性验证。","skills.robotics.header":"机器人系统","skills.robotics.title":"机器人底层控制、导航与执行系统","skills.robotics.description":"关注 ROS2、CAN/CANFD、电机闭环、传感器融合、Nav2 与系统实时性。","skills.product.header":"产品工程","skills.product.title":"从技术原型到可用产品","skills.product.description":"覆盖微信小程序、Node.js、数据库、云部署、WebSocket 与 AI API 集成。","projects.kicker":"代表项目","projects.worldcup.tag":"产品系统","projects.fpga.tag":"FPGA 系统","projects.robot.tag":"机器人系统","projects.ai.tag":"AI 产品","projects.worldcup.visualTitle":"比赛中心","experience.kicker":"工程经历","experience.2022.label":"起点","experience.2022.title":"嵌入式系统工程师","experience.2022.description":"进入嵌入式系统、实时通信与设备控制领域。","experience.2024.label":"5G / RFSoC / O-RAN","experience.2024.title":"无线通信与高速数据处理","experience.2024.description":"参与 DU/RU 物理层、RFSoC、帧同步与网络抓包分析。","experience.2025.label":"FPGA / 高速总线","experience.2025.title":"高速总线与可编程逻辑","experience.2025.description":"聚焦 FPGA、LVDS、RGMII、CAN 与嵌入式协议系统。","experience.2026.label":"当前方向","experience.2026.title":"机器人 · AI 工具 · 产品工程","experience.2026.description":"将底层工程能力拓展到机器人系统与 AI 原生产品。","lab.kicker":"当前项目","lab.1.status":"进行中","lab.1.title":"ROS2 移动机器人平台","lab.1.description":"Raspberry Pi + MCU + 编码器电机 + CAN/CANFD + 超声波传感器的完整控制与导航系统。","lab.2.status":"原型阶段","lab.2.title":"AI 小说工程系统","lab.2.description":"角色记忆、剧情状态、章节规划、模型切换与质量评估的可扩展工作流。","lab.3.status":"研究阶段","lab.3.title":"AI + MCU 边缘控制","lab.3.description":"探索 AI 芯片与 MCU 协同推理、控制决策和实时通信的工程架构。","lab.progress":"进度","contact.kicker":"联系方式","contact.command":"$ 连接 kong_qingxiang","contact.githubLabel":"GitHub","contact.emailLabel":"邮箱","contact.locationLabel":"所在地","contact.statusLabel":"状态","footer.backToTop":"返回顶部 ↑","menu.open":"打开菜单","menu.close":"关闭菜单","language.switchToEnglish":"切换为英文","language.currentLabel":"中文","hero.name.primary":"孔","hero.name.secondary":"庆翔"},"en":{"meta.title":"KQ Systems Lab | Kong Qingxiang","meta.description":"Kong Qingxiang’s engineering portfolio covering embedded systems, FPGA, robotics and AI applications.","nav.about":"About","nav.skills":"System Map","nav.projects":"Projects","nav.experience":"Experience","nav.lab":"Lab","nav.contact":"Contact","hero.eyebrow":"ENGINEERING SYSTEMS FOR THE REAL WORLD","hero.subtitle":"Embedded Systems · FPGA · Robotics · AI Applications","hero.description":"I connect hardware, communication, software and product engineering, transforming complex systems into reliable, verifiable and deliverable solutions.","hero.projectsButton":"Explore Projects","hero.skillsButton":"View System Map","hero.meta.locationLabel":"Location","hero.meta.locationValue":"Nanjing, China","hero.meta.focusLabel":"Focus","hero.meta.focusValue":"Robotics · Embedded · AI","hero.visual.system":"System","hero.visual.online":"Online","hero.visual.liveSignal":"Live Signal","hero.visual.streaming":"Streaming","hero.scroll":"Scroll to Explore","about.kicker":"About","about.title":"From Low-Level Communication to Complete Products","about.paragraph1":"I am a systems engineer working across embedded software, FPGA, high-speed communication, robotics control and product development.","about.paragraph2":"I integrate hardware, protocols, algorithms and services into complete systems, with an emphasis on reliability, real-time performance, maintainability and delivery.","about.stats.directions":"Core Technical Domains","about.stats.projects":"System-Level Projects","about.stats.delivery":"Delivery-Oriented Engineering","skills.kicker":"System Map","skills.title":"Technology System Map","skills.embeddedTab":"Embedded","skills.roboticsTab":"Robotics","skills.productTab":"Product","skills.embedded.header":"Embedded Systems","skills.embedded.title":"Embedded Systems for Real-Time Control and Reliable Communication","skills.embedded.description":"MCU, RTOS, Linux, device drivers, communication protocols and system debugging under real hardware constraints.","skills.fpga.header":"FPGA Systems","skills.fpga.title":"High-Speed Data Links and Programmable Logic","skills.fpga.description":"Verilog, LVDS, RGMII, MAC, clock-domain crossing, frame protocols and link reliability verification.","skills.robotics.header":"Robotics","skills.robotics.title":"Robot Control, Navigation and Execution Systems","skills.robotics.description":"ROS2, CAN/CANFD, closed-loop motor control, sensor integration, Nav2 and real-time system engineering.","skills.product.header":"Product Engineering","skills.product.title":"From Engineering Prototype to Product Delivery","skills.product.description":"WeChat Mini Programs, Node.js, databases, cloud deployment, WebSocket and AI API integration.","projects.kicker":"Selected Work","projects.title":"Selected Work","projects.worldcup.tag":"Product System","projects.worldcup.title":"FIFA World Cup Chinese Data Platform","projects.worldcup.description":"A WeChat Mini Program integrating fixtures, teams, players, statistics, live scores and qualification calculations, powered by Node.js, SQLite/MySQL and WebSocket.","projects.worldcup.visualTitle":"Match Center","projects.fpga.tag":"FPGA System","projects.fpga.title":"FPGA High-Speed LVDS Data Link","projects.fpga.description":"A high-speed path from FT232H to FPGA and peripheral devices, featuring frame synchronization, protocol parsing, CRC verification and multi-module distribution.","projects.robot.tag":"Robotics","projects.robot.title":"ROS2 Mobile Robot Control System","projects.robot.description":"A four-wheel mobile robot stack covering motor control, encoder feedback, CAN communication, odometry, TF and Nav2 navigation.","projects.ai.tag":"AI Product","projects.ai.title":"Long-Form AI Novel Writing System","projects.ai.description":"An extensible system for 800–1000 chapter novels, including character memory, worldbuilding, plot lines, chapter state and multi-model API orchestration.","common.viewCase":"View Case Study","experience.kicker":"Experience","experience.title":"Engineering Experience","experience.2022.label":"Start","experience.2022.title":"Embedded Systems Engineer","experience.2022.description":"Entered the fields of embedded systems, real-time communication and device control.","experience.2024.label":"5G / RFSoC / O-RAN","experience.2024.title":"Wireless Communication and High-Speed Data Processing","experience.2024.description":"Worked on DU/RU physical-layer systems, RFSoC, frame synchronization and network packet analysis.","experience.2025.label":"FPGA / High-Speed Bus","experience.2025.title":"High-Speed Interfaces and Programmable Logic","experience.2025.description":"Focused on FPGA, LVDS, RGMII, CAN and embedded communication systems.","experience.2026.label":"Current Focus","experience.2026.title":"Robotics · AI Tools · Product Engineering","experience.2026.description":"Expanding low-level engineering expertise into robotics systems and AI-native products.","lab.kicker":"Current Lab","lab.title":"What I Am Building","lab.1.status":"Active","lab.1.title":"ROS2 Mobile Robot Platform","lab.1.description":"A complete control and navigation system using Raspberry Pi, MCU, encoder motors, CAN/CANFD and ultrasonic sensors.","lab.2.status":"Prototype","lab.2.title":"AI Novel Engineering System","lab.2.description":"An extensible workflow for character memory, plot state, chapter planning, model switching and quality evaluation.","lab.3.status":"Research","lab.3.title":"AI + MCU Edge Control","lab.3.description":"Exploring collaborative inference, control decisions and real-time communication across AI processors and MCUs.","lab.progress":"Progress","contact.kicker":"Contact","contact.title":"Build a Connection","contact.description":"Open to discussions and collaboration in embedded systems, FPGA, high-speed communication, robotics platforms, AI tools and technical products.","contact.emailButton":"Send Email","contact.command":"$ connect kong_qingxiang","contact.githubLabel":"GitHub","contact.emailLabel":"Email","contact.locationLabel":"Location","contact.statusLabel":"Status","contact.location":"Nanjing, China","contact.status":"Open to Collaboration","footer.backToTop":"Back to Top ↑","menu.open":"Open menu","menu.close":"Close menu","language.switchToChinese":"Switch to Chinese","language.currentLabel":"EN","hero.name.primary":"KONG","hero.name.secondary":"QINGXIANG"}};
  let dictionaries = FALLBACK_TRANSLATIONS;
  let currentLanguage = "zh";

  async function loadDictionary(language) {
    try {
      const response = await fetch(`./assets/i18n/${language}.json`, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      console.warn(`[i18n] Using embedded ${language} fallback:`, error.message);
      return FALLBACK_TRANSLATIONS[language];
    }
  }

  function applyLanguage(language) {
    const dictionary = dictionaries[language];
    if (!dictionary) return;

    currentLanguage = language;
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.body.dataset.language = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }
    });

    const languageLabel = document.getElementById("languageLabel");
    const languageButton = document.getElementById("languageButton");
    if (languageLabel) languageLabel.textContent = language === "zh" ? "中文" : "EN";
    if (languageButton) {
      languageButton.setAttribute(
        "aria-label",
        language === "zh" ? "切换为英文" : "Switch to Chinese"
      );
      languageButton.setAttribute(
        "title",
        language === "zh" ? "点击切换为英文" : "Switch to Chinese"
      );
    }

    const menuButton = document.getElementById("menuButton");
    if (menuButton) {
      menuButton.setAttribute("aria-label", language === "zh" ? "打开菜单" : "Open menu");
    }

    document.title = dictionary["meta.title"] || document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && dictionary["meta.description"]) {
      metaDescription.setAttribute("content", dictionary["meta.description"]);
    }

    localStorage.setItem(STORAGE_KEY, language);
    window.dispatchEvent(new CustomEvent("kq:languagechange", { detail: { language } }));
  }

  async function initialize() {
    const [zh, en] = await Promise.all([loadDictionary("zh"), loadDictionary("en")]);
    dictionaries = { zh, en };

    const savedLanguage = localStorage.getItem(STORAGE_KEY);
    const initialLanguage = savedLanguage === "en" ? "en" : "zh";
    applyLanguage(initialLanguage);

    const languageButton = document.getElementById("languageButton");
    if (languageButton) {
      languageButton.addEventListener("click", () => {
        applyLanguage(currentLanguage === "zh" ? "en" : "zh");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
