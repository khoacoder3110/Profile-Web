// menu
const menu = document.querySelector(".nav-links");
const menuButton = document.querySelector(".nav-icons");
// overlay
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("nav-open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("nav-open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

// light/dark mode

const toggleBtn = document.getElementById("toggle-theme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});


// typed
const typed = new Typed("#typed", {
  strings: ["Frontend Developer", "Web Designer", "UI/UX Designer"],
  typeSpeed: 70,
  backSpeed: 40,
  loop: true,
  showCursor: false,
});

// language toggle
const translations = {
  en: {
    nav: ["Home", "Works", "Projects", "Skills", "Contact"],
    bannerHeading: "Hello, I'm Khoa",
    bannerParagraph: `I'm a passionate Frontend Developer from Vietnam. 
    I specialize in building responsive, user-friendly websites using HTML, CSS, and JavaScript. 
    I enjoy turning complex problems into simple, elegant interfaces. Outside of coding, 
    I like reading tech blogs and exploring new UI trends. 
    Currently, I'm learning Node.js to become a full-stack developer.`,
    bannerBtn: "View More",

    thingsHeading: "Things I Do",
    things: [
      {
        title: "Frontend",
        content: `I've been learning and practicing Frontend development since early 2025. 
        I focus on writing clean, maintainable code and creating smooth, intuitive user experiences. 
        Currently, I'm learning React to build modern web applications, 
        and I'm also familiar with tools like Github, VS Code, and Figma to support my workflow.`
      },
      {
        title: "Learn English",
        content: `I'm currently in the process of improving my English skills to enhance both my personal development and professional growth. 
        Being able to read and understand technical documents in English not only helps me follow programming courses more effectively, 
        but also allows me to access a wider range of high-quality resources, tutorials, and documentation from the global developer community.`
      },
      {
        title: "Relationships",
        content: `I'm actively building meaningful connections in the tech community to learn, grow, and create new opportunities. 
        I believe that connection leads to learning, and learning opens the door to greater possibilities — both personally and professionally.`
      }
    ],
    projectsHeading: "My Projects",
    projectBtn: "View Project",
    skillsHeading: "Skills",
    footerHeading: "Thank you for visiting my profile!"
  },
  vi: {
    nav: ["Trang chủ", "Công việc", "Dự án", "Kỹ năng", "Liên hệ"],
    bannerHeading: "Xin chào, tôi là Khoa",
    bannerParagraph: `Tôi là một lập trình viên Frontend đam mê đến từ Việt Nam.
    Tôi chuyên xây dựng các trang web đáp ứng tốt, thân thiện với người dùng bằng HTML, CSS và JavaScript.
    Tôi thích biến những vấn đề phức tạp thành giao diện đơn giản, tinh tế.
    Ngoài lập trình, tôi thích đọc blog công nghệ và khám phá các xu hướng UI mới.
    Hiện tại, tôi đang học Node.js để trở thành lập trình viên full-stack.`,
    bannerBtn: "Xem thêm",

    thingsHeading: "Những việc tôi làm",
    things: [
      {
        title: "Frontend",
        content: `Tôi đã học và thực hành lập trình Frontend từ đầu năm 2025.
        Tôi tập trung vào việc viết mã sạch, dễ bảo trì và tạo ra trải nghiệm người dùng mượt mà, trực quan.
        Hiện tại, tôi đang học React để xây dựng ứng dụng web hiện đại,
        và tôi cũng quen thuộc với các công cụ như Github, VS Code và Figma để hỗ trợ công việc.`
      },
      {
        title: "Học tiếng Anh",
        content: `Tôi đang cải thiện kỹ năng tiếng Anh của mình để phát triển bản thân và nghề nghiệp.
        Việc đọc và hiểu tài liệu kỹ thuật bằng tiếng Anh giúp tôi học lập trình hiệu quả hơn
        và tiếp cận nhiều tài nguyên chất lượng từ cộng đồng lập trình toàn cầu.`
      },
      {
        title: "Mối quan hệ",
        content: `Tôi tích cực xây dựng mối quan hệ ý nghĩa trong cộng đồng công nghệ để học hỏi, phát triển và mở ra nhiều cơ hội.
        Tôi tin rằng kết nối dẫn đến học hỏi, và học hỏi mở ra nhiều khả năng hơn - cả trong công việc lẫn cuộc sống.`
      }
    ],
    projectsHeading: "Dự án của tôi",
    projectBtn: "Xem dự án",
    skillsHeading: "Kỹ năng",
    footerHeading: "Cảm ơn bạn đã ghé thăm hồ sơ của tôi!"
  }
};

const langBtn = document.getElementById("toggle-language");
let currentLang = "en";

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "vi" : "en";
  langBtn.textContent = currentLang === "en" ? "🌐 VI" : "🌐 EN";
  applyTranslations(currentLang);
});

function applyTranslations(lang) {
  const t = translations[lang];

  // Nav links
  const navLinks = document.querySelectorAll(".nav-link a");
  navLinks.forEach((link, i) => {
    link.textContent = t.nav[i];
  });
  const contactBtn = document.querySelector(".nav-btn");
  if (contactBtn) contactBtn.textContent = t.nav[4];

  // Banner
  const h1 = document.querySelector(".banner-heading h1");
  const p = document.querySelector(".banner-heading p");
  const btn = document.querySelector(".banner-btn");
  if (h1) h1.textContent = t.bannerHeading;
  if (p) p.textContent = t.bannerParagraph;
  if (btn) btn.textContent = t.bannerBtn;

  // Things section
  const thingsHeading = document.querySelector("#things h2");
  if (thingsHeading) thingsHeading.textContent = t.thingsHeading;

  const items = document.querySelectorAll(".things-item");
  t.things.forEach((thing, i) => {
    const title = items[i]?.querySelector("h3");
    const desc = items[i]?.querySelector("p");
    if (title && desc) {
      title.textContent = thing.title;
      desc.textContent = thing.content;
    }
  });

  // Projects
  const projectHeading = document.querySelector("#projects h2");
  const projectBtn = document.querySelector(".projects-btn button");
  if (projectHeading) projectHeading.textContent = t.projectsHeading;
  if (projectBtn) projectBtn.textContent = t.projectBtn;

  // Skills
  const skillsHeading = document.querySelector("#skills h2");
  if (skillsHeading) skillsHeading.textContent = t.skillsHeading;

  // Footer
  const footerHeading = document.querySelector(".footer-heading h1");
  if (footerHeading) footerHeading.textContent = t.footerHeading;
}

// Đảm bảo dịch ngay khi trang vừa load
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);
});


