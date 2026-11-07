/**
 * Vu Minh Hieu - Enterprise Developer Portfolio
 * Multilingual (VI / EN), responsive menu, smooth scrolling & interactions
 */

// Multilingual Dictionary
const i18nData = {
  vi: {
    nav_home: "Trang chủ",
    nav_about: "Giới thiệu",
    nav_skills: "Kỹ năng",
    nav_experience: "Kinh nghiệm",
    nav_projects: "Dự án",
    nav_certifications: "Chứng chỉ",
    nav_contact: "Liên hệ",
    hero_badge: "Sẵn sàng cho cơ hội Fullstack / .NET / Flutter / IoT",
    hero_greeting: "Xin chào, tôi là",
    hero_subtitle: "Kỹ sư Phần mềm Fullstack với hơn 3 năm kinh nghiệm phát triển hệ thống Backend hiệu năng cao (.NET 8, Microservices, BFF Gateway), Ứng dụng Đa nền tảng (Flutter, React MFE, WPF) và Vận hành Hệ sinh thái IoT Smart Home 2 nền tảng song song (AWS IoT Core & Tuya SDK) tại Sunhouse Group và Brother Vietnam.",
    btn_explore_projects: "Khám phá Dự án",
    btn_contact_me: "Liên hệ ngay",
    hero_float_title: "Kiến trúc hệ thống",
    metric_exp: "Năm Kinh Nghiệm Thực Chiến",
    metric_iot: "Nền Tảng IoT Cloud (AWS & Tuya)",
    metric_systems: "Hệ Thống Doanh Nghiệp & Super App",
    metric_award: "Nhân Viên Tiêu Biểu (Brother VN)",
    tag_about: "Hồ sơ năng lực",
    about_title: "Về Bản Thân",
    about_desc: "Tư duy hệ thống, tập trung vào tính ổn định, bảo mật, khả năng mở rộng quy mô và tạo ra giá trị kinh doanh lâu dài.",
    about_p1: "Tôi là Kỹ sư Phần mềm Fullstack tốt nghiệp ngành Kỹ thuật Phần mềm tại Đại học Công Nghiệp Hà Nội (HaUI). Với nền tảng kỹ thuật vững chắc và tư duy kiến trúc hệ thống chuẩn mực, tôi đã tham gia trực tiếp vào việc thiết kế kiến trúc và phát triển các sản phẩm công nghệ trọng yếu tại <strong>Tập đoàn SUNHOUSE</strong> và <strong>Brother Industrial Vietnam</strong>.",
    about_p2: "Thế mạnh cốt lõi của tôi bao gồm: Thiết kế hệ thống Backend .NET 8 theo Clean Architecture và Microservices (BFF Gateway YARP, Redis Cache, CQRS MediatR); Xây dựng ứng dụng Đa nền tảng Flutter (Clean Architecture + Riverpod 2.x, Custom 2D Canvas rendering); Viết cầu nối Native (Kotlin, Swift, Objective-C); Tích hợp song song 2 hệ sinh thái Smart Home IoT (AWS IoT Core MQTT + ESP32 BLE và Tuya SmartLife SDK / Sweeper P2P Map); cùng năng lực Tối ưu hóa hiệu năng cơ sở dữ liệu chuyên sâu (SQL Tuning, Indexing, Execution Plan).",
    about_h1_title: "Chuẩn Mực & Bền Vững",
    about_h1_desc: "Áp dụng triệt để SOLID, Clean Architecture, Feature-first và Clean Code.",
    about_h2_title: "IoT & Real-time",
    about_h2_desc: "Làm chủ kết nối phần cứng ESP32 BLE, AWS IoT MQTT SigV4 và SDK Tuya.",
    about_h3_title: "Tối Ưu Hiệu Năng CSDL",
    about_h3_desc: "Chứng chỉ chuyên sâu SQL Tuning, tối ưu Stored Procedures và Indexing.",
    about_h4_title: "Văn Hóa Chuyên Nghiệp",
    about_h4_desc: "Kinh nghiệm làm việc chuẩn Horenso, Kaizen từ môi trường doanh nghiệp Nhật Bản.",
    tag_skills: "Năng lực cốt lõi",
    skills_title: "Ma Trận Kỹ Năng Kỹ Thuật",
    skills_desc: "Hệ thống kỹ năng được cấu trúc theo 4 trụ cột kỹ thuật chuẩn Enterprise Mobile & Backend Architect.",
    pillar1_title: "Backend, Microservices & Architecture",
    pillar1_desc: "Thiết kế Backend API hiệu năng cao, cơ chế phân tán, API Gateway BFF, xử lý luồng dữ liệu realtime và tuân thủ các nguyên lý kiến trúc hướng đối tượng.",
    pillar2_title: "Mobile (Flutter), Native Bridge & Frontend",
    pillar2_desc: "Phát triển Super App đa nền tảng Flutter (iOS/Android/Desktop), viết cầu nối Native Platform Channels và xây dựng kiến trúc Web Micro-frontends.",
    pillar3_title: "Smart Home IoT, Cloud & Firmware",
    pillar3_desc: "Vận hành song song 2 giải pháp Smart Home IoT: AWS IoT Core MQTT kết nối vi điều khiển ESP32 và tích hợp Tuya SmartLife SDK / Sweeper P2P SDK.",
    pillar4_title: "Database, DevOps & Quality Standards",
    pillar4_desc: "Tối ưu hóa hiệu năng truy vấn CSDL chuyên sâu, thiết kế cấu trúc dữ liệu quy mô lớn, xây dựng luồng tự động hóa CI/CD và quy trình chất lượng chuẩn quốc tế.",
    tag_exp: "Hành trình nghề nghiệp",
    exp_title: "Kinh Nghiệm Làm Việc",
    exp_desc: "Kinh nghiệm thực chiến tại các tập đoàn sản xuất và công nghệ hàng đầu.",
    job1_role: "Fullstack Developer (.NET & Flutter)",
    job1_company: "Công ty Công nghệ và Ứng dụng Sunhouse (Sunhouse Group JSC)",
    job1_period: "10/2025 - Hiện tại",
    job1_b1: "Phát triển hệ sinh thái Super App eSunhouse V2 (Flutter iOS/Android, cấu trúc feature modules theo Clean Architecture + Riverpod 2.x), hệ thống Backend API (.NET 8, Dapper, PostgreSQL/SQL Server, Redis) và Web Micro-frontends (Shell App / CRM MFE theo Module Federation).",
    job1_b2: "<strong>Kiến trúc AWS IoT Core & ESP32:</strong> Triển khai BLE Provisioning (Protocomm Security 1, ECDH Curve25519, AES-CTR); xây dựng kênh điều khiển realtime qua AWS IoT Core MQTT (SigV4 WebSocket, AWS Cognito/STS) kết hợp SignalR Hub, cơ chế Optimistic UI + DebounceState + ACK correlation chống nháy giao diện, TCP Network Guard và điều khiển giọng nói Tiếng Việt (NLP Voice Control).",
    job1_b3: "<strong>Tích hợp Tuya SDK, Sweeper P2P & Tuya Cloud song song AWS:</strong> Xây dựng cầu nối Native (Kotlin, Swift, Objective-C) tích hợp Tuya SmartLife App SDK & Tuya Cloud để ghép nối, điều khiển thiết bị theo DP Schema, quản lý kịch bản (Scene SDK) và chia sẻ thiết bị; thiết kế luồng cấp phát Tuya Credential (HMAC-SHA256) từ Backend và giải mã luồng P2P Binary/LZ4 (Sweeper SDK) để vẽ bản đồ Robot Laser 2D realtime trên Flutter bằng Custom Canvas.",
    job1_b4: "<strong>Phát triển nghiệp vụ e-Warranty, DMS & Loyalty:</strong> Xây dựng phân hệ kích hoạt/tra cứu bảo hành điện tử, nhập kho đại lý (DMS), tích xu đổi quà Sunhouse Xu (Idempotency, Contextual Palette phân hạng thành viên), Banner sự kiện động và tích hợp Firebase FCM, Zalo ZNS, MinIO.",
    job2_role: "Software Engineer (.NET & Cross-platform)",
    job2_company: "Brother Industrial Vietnam",
    job2_period: "11/2023 - 10/2025",
    job2_b1: "Thiết kế kiến trúc và phát triển toàn diện (Fullstack) các hệ thống phần mềm quản lý nội bộ, tự động hóa quy trình nghiệp vụ, thúc đẩy chuyển đổi số (DX) và cắt giảm chi phí vận hành cho các phòng ban nhà máy.",
    job2_b2: "Xây dựng các module thư viện lõi dùng chung (Core Shared Libraries) giúp chuẩn hóa kiến trúc, tăng tốc độ phân phối tính năng và đảm bảo hoàn thành xuất sắc KPI bộ phận.",
    job2_b3: "<strong>Tối ưu hóa hiệu năng CSDL (SQL Performance Tuning):</strong> Tái cấu trúc truy vấn phức tạp, thiết kế chiến lược Indexing tối ưu và tinh chỉnh Stored Procedures, giúp tăng tốc độ xử lý và cắt giảm lãng phí tài nguyên máy chủ cho các hệ thống trọng yếu đang vận hành.",
    job2_b4: "Trực tiếp xử lý sự cố (Troubleshooting), bảo trì và nâng cấp các hệ thống phần mềm trọng yếu tại nhà máy Việt Nam và chi nhánh quốc tế (Nhật Bản, Hong Kong). Đạt giải thưởng <strong>Nhân viên tiêu biểu năm - Xếp loại A+</strong> trong kỳ đánh giá nhân sự (12/2024).",
    tag_projects: "Sản phẩm thực tế",
    projects_title: "Dự Án Trọng Điểm",
    projects_desc: "Các case study thực tế từ kiến trúc đa nền tảng, hệ thống IoT công nghiệp đến giải pháp số hóa quy trình doanh nghiệp.",
    p1_title: "Hệ Sinh Thái Super App, Smart Home IoT & Bảo Hành Điện Tử (eSunhouse V2)",
    p1_desc: "Super App đa dịch vụ và nền tảng Backend .NET 8 vận hành song song 2 luồng IoT: (1) AWS IoT Core MQTT SigV4, ESP32 BLE Provisioning (ECDH/AES-CTR), OTA Firmware & Điều khiển giọng nói; (2) Tuya SmartLife SDK, Tuya Cloud Auth HMAC-SHA256, giải mã luồng Sweeper P2P LZ4 dựng bản đồ Robot Laser 2D realtime trên Flutter. Tích hợp e-Warranty, DMS và Loyalty.",
    p2_title: "Hệ Thống Quản Lý Đặt Hàng & Phê Duyệt Điện Tử (OMS)",
    p2_desc: "Số hóa 100% quy trình đặt hàng và phát hành đơn nội bộ cho Phòng Kỹ thuật Phát triển Brother Vietnam. Thay thế toàn bộ thủ tục giấy tờ thủ công bằng luồng phê duyệt điện tử (e-Approval đa cấp), tích hợp thông báo tự động và phân quyền ma trận, giúp tiết kiệm đáng kể thời gian và chi phí vận hành.",
    p3_title: "Ứng Dụng Đa Nền Tảng Quản Lý Vận Chuyển Rack Quốc Tế",
    p3_desc: "Phát triển ứng dụng Flutter đa nền tảng (iOS, Desktop, Web) cho Bộ phận Xuất nhập khẩu (Logistics). Tích hợp quét mã QR Code siêu nhanh, cơ chế đa ngôn ngữ (i18n) để theo dõi vòng đời các giá đỡ hàng (Rack) trong chuỗi vận chuyển quốc tế. Giải cứu tiến độ và đưa vào triển khai thành công tại chi nhánh Hong Kong và Nhật Bản.",
    p4_title: "Hệ Thống Quản Lý Thay Đổi Thiết Kế Kỹ Thuật (WPF)",
    p4_desc: "Hệ thống tự động hóa quy trình sửa đổi và phát hành bản vẽ thiết kế kỹ thuật phòng Kỹ thuật Bảo dưỡng Brother Vietnam. Tích hợp chữ ký số điện tử (e-Signature) bảo mật cao, mã QR định danh bản vẽ, chuẩn hóa luồng phê duyệt và khắc phục hoàn toàn điểm nghẽn của hệ thống legacy cũ.",
    tag_certs: "Bảo chứng chuyên môn",
    certs_title: "Chứng Chỉ & Giải Thưởng",
    certs_desc: "Quá trình liên tục nâng cấp chuyên môn kỹ thuật và những ghi nhận xuất sắc trong công việc.",
    award_title: "Nhân Viên Tiêu Biểu Năm - Đạt Loại A+",
    award_desc: "Đạt xếp loại A+ xuất sắc trong kỳ đánh giá nhân sự năm; khen thưởng Nhân viên tiêu biểu có đóng góp chuyển đổi số và phong trào công ty.",
    cert1_desc: "Chứng chỉ chuyên sâu về phân tích Execution Plan, tối ưu hóa chỉ mục (Indexing Strategy), Stored Procedures và tinh chỉnh hiệu năng hệ thống CSDL lớn.",
    cert2_desc: "Lập trình ứng dụng đa nền tảng Flutter chuyên nghiệp, State Management Riverpod, Custom Paint/Canvas và tối ưu hóa hiệu năng render UI.",
    cert3_desc: "Nền tảng kiến trúc hướng đối tượng (OOP), cấu trúc dữ liệu, MVC và lập trình hệ thống web chuyên nghiệp.",
    tag_contact: "Kết nối",
    contact_title: "Thông Tin Liên Hệ",
    contact_desc: "Sẵn sàng trao đổi về các cơ hội hợp tác, dự án công nghệ hoặc vị trí Senior Fullstack / Tech Lead.",
    contact_card_title: "Liên Hệ Trực Tiếp",
    contact_card_desc: "Tôi luôn sẵn sàng phản hồi nhanh chóng qua các kênh liên lạc dưới đây.",
    lbl_location: "Địa Điểm",
    lbl_phone: "Điện Thoại / Zalo",
    form_name: "Họ và tên của bạn",
    form_email: "Email liên hệ",
    form_msg: "Tin nhắn / Lời nhắn",
    btn_send_msg: "Gửi Tin Nhắn",
    footer_subtitle: "Fullstack Software Engineer (.NET 8 • Flutter • IoT Cloud)"
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_certifications: "Certifications",
    nav_contact: "Contact",
    hero_badge: "Available for Fullstack / .NET / Flutter / IoT Opportunities",
    hero_greeting: "Hi, I am",
    hero_subtitle: "Fullstack Software Engineer with 3+ years of experience architecting and delivering enterprise Backend systems (.NET 8, Microservices, BFF Gateway), Cross-platform applications (Flutter, React MFE, WPF), and Dual-platform Smart Home IoT ecosystems (AWS IoT Core & Tuya SDK) at Sunhouse Group and Brother Vietnam.",
    btn_explore_projects: "Explore Projects",
    btn_contact_me: "Contact Me",
    hero_float_title: "System Architecture",
    metric_exp: "Years Production Experience",
    metric_iot: "Dual IoT Cloud Ecosystems (AWS & Tuya)",
    metric_systems: "Enterprise & Super App Systems",
    metric_award: "Top Performer A+ (Brother VN)",
    tag_about: "Professional Profile",
    about_title: "About Me",
    about_desc: "System thinking mindset prioritizing stability, security, scalability, and long-term business value.",
    about_p1: "I am a Fullstack Software Engineer holding a Bachelor's Degree in Software Engineering from Hanoi University of Industry (HaUI). With deep engineering fundamentals and enterprise architectural mindset, I have actively led the design and implementation of mission-critical systems at <strong>SUNHOUSE Group</strong> and <strong>Brother Industrial Vietnam</strong>.",
    about_p2: "My core expertise includes: Designing high-throughput .NET 8 Backend systems following Clean Architecture and Microservices (BFF Gateway YARP, Redis Cache, CQRS MediatR); Engineering cross-platform Flutter applications (Clean Architecture + Riverpod 2.x, Custom 2D Canvas rendering); Developing Native Platform Channels (Kotlin, Swift, Objective-C); Operating dual-platform Smart Home IoT architectures (AWS IoT Core MQTT + ESP32 BLE and Tuya SmartLife SDK / Sweeper P2P Map); and In-depth Database Performance Tuning (SQL Tuning, Indexing, Execution Plan Analysis).",
    about_h1_title: "Standard & Resilient",
    about_h1_desc: "Strict adherence to SOLID principles, Clean Architecture, Feature-first modular design, and Clean Code.",
    about_h2_title: "IoT & Real-time Systems",
    about_h2_desc: "Deep mastery of ESP32 BLE hardware provisioning, AWS IoT MQTT SigV4, and Tuya SmartLife SDKs.",
    about_h3_title: "Database Optimization",
    about_h3_desc: "Certified SQL Database Performance Tuning, query execution plan analysis, and stored procedure optimization.",
    about_h4_title: "Professional Culture",
    about_h4_desc: "Practicing Japanese corporate communication standards (Horenso, Kaizen) and Agile/Scrum delivery.",
    tag_skills: "Core Competencies",
    skills_title: "Technical Skills Matrix",
    skills_desc: "Structured across 4 foundational engineering pillars aligned with Enterprise Mobile & Backend Architect standards.",
    pillar1_title: "Backend, Microservices & Architecture",
    pillar1_desc: "Architecting high-throughput distributed APIs, BFF Gateway pattern, real-time message broadcasting, and domain-driven design.",
    pillar2_title: "Mobile (Flutter), Native Bridge & Frontend",
    pillar2_desc: "Delivering cross-platform Super Apps on Flutter (iOS/Android/Desktop), low-level Native Platform Channels, and Web Micro-frontends.",
    pillar3_title: "Smart Home IoT, Cloud & Firmware",
    pillar3_desc: "Dual-track Smart Home IoT engineering: AWS IoT Core MQTT for ESP32 microcontrollers alongside Tuya SmartLife App SDK & Sweeper P2P.",
    pillar4_title: "Database, DevOps & Quality Standards",
    pillar4_desc: "High-performance database query tuning, high-scale schema design, automated CI/CD pipelines, and international software quality standards.",
    tag_exp: "Career Journey",
    exp_title: "Work Experience",
    exp_desc: "Proven production track record across tier-one manufacturing and technology corporations.",
    job1_role: "Fullstack Developer (.NET & Flutter)",
    job1_company: "Sunhouse Technology and Application JSC (Sunhouse Group)",
    job1_period: "10/2025 - Present",
    job1_b1: "Architected and delivered the eSunhouse V2 Super App ecosystem (Flutter iOS/Android, feature-first Clean Architecture + Riverpod 2.x), Backend APIs (.NET 8, Dapper, PostgreSQL/SQL Server, Redis), and Web Micro-frontends (Shell App / CRM MFE via Module Federation).",
    job1_b2: "<strong>AWS IoT Core & ESP32 Architecture:</strong> Engineered BLE Provisioning (Protocomm Security 1, ECDH Curve25519, AES-CTR); built real-time device control channels via AWS IoT Core MQTT (SigV4 WebSocket, AWS Cognito/STS) integrated with SignalR Hub, Optimistic UI + DebounceState + ACK correlation for flicker-free UX, TCP Network Guard, and Vietnamese Voice Control (NLP).",
    job1_b3: "<strong>Dual Tuya SDK, Sweeper P2P & Tuya Cloud Integration:</strong> Developed Native Platform Channels (Kotlin, Swift, Objective-C) integrating Tuya SmartLife App SDK & Tuya Cloud for device pairing, DP Schema control, Scene automation, and device sharing; designed Backend Tuya Credential provisioning (HMAC-SHA256) and decoded binary/LZ4 P2P streams (Sweeper SDK) to render real-time 2D Laser Robot Maps on Flutter.",
    job1_b4: "<strong>e-Warranty, DMS & Loyalty Modules:</strong> Developed digital warranty activation/lookup, dealer inventory workflows (DMS), Loyalty points redemption (Sunhouse Xu with Idempotency and Contextual Palette tiering), dynamic event banners, and Firebase FCM, Zalo ZNS, MinIO integrations.",
    job2_role: "Software Engineer (.NET & Cross-platform)",
    job2_company: "Brother Industrial Vietnam",
    job2_period: "11/2023 - 10/2025",
    job2_b1: "Architected and developed full-stack internal management systems, automating business workflows, driving Digital Transformation (DX), and reducing operational overhead across manufacturing departments.",
    job2_b2: "Engineered Core Shared Libraries to standardize software architecture, accelerate feature delivery, and consistently achieve departmental KPIs.",
    job2_b3: "<strong>SQL Performance Tuning:</strong> Refactored complex queries, designed optimal indexing strategies, and tuned Stored Procedures to significantly boost throughput and eliminate server resource bottlenecks for high-load systems.",
    job2_b4: "Led troubleshooting, maintenance, and system upgrades for core applications across Vietnamese manufacturing plants and international branches (Japan, Hong Kong). Awarded <strong>Employee of the Year - Rated A+</strong> in annual performance review (12/2024).",
    tag_projects: "Case Studies",
    projects_title: "Featured Projects",
    projects_desc: "Production systems spanning cross-platform apps, industrial IoT architectures, and enterprise business automation.",
    p1_title: "eSunhouse V2 Super App, Smart Home IoT & e-Warranty Ecosystem",
    p1_desc: "Multi-service Super App and .NET 8 Backend operating dual IoT tracks: (1) AWS IoT Core MQTT SigV4, ESP32 BLE Provisioning (ECDH/AES-CTR), OTA Firmware & Vietnamese NLP Voice Control; (2) Tuya SmartLife SDK, Tuya Cloud HMAC-SHA256 Auth, P2P LZ4 stream decoding for real-time 2D Laser Robot Maps on Flutter. Integrated with e-Warranty, DMS, and Loyalty.",
    p2_title: "Order Management & Electronic Approval System (OMS)",
    p2_desc: "Digitized 100% of internal order and requisition workflows for Brother Vietnam's Engineering Development Dept. Replaced paper trails with multi-stage electronic approval (e-Approval), automated notifications, and matrix permissions, saving operational hours and cutting paperwork costs.",
    p3_title: "Cross-platform International Rack Logistics Management App",
    p3_desc: "Developed a cross-platform Flutter application (iOS, Desktop, Web) for the Logistics Dept. Integrated ultra-fast QR Code scanning and multi-language support (i18n) to track cargo racks across international transport pipelines. Successfully rescued schedule and deployed to Hong Kong and Japan branches.",
    p4_title: "Engineering Design Change Management System (WPF)",
    p4_desc: "Automated drawing modification and release workflows for Brother Vietnam Maintenance Dept. Integrated high-security digital signatures (e-Signature), drawing QR code identifiers, and standardized approval chains, resolving legacy system bottlenecks.",
    tag_certs: "Verified Expertise",
    certs_title: "Certifications & Honors",
    certs_desc: "Continuous technical advancement and professional recognitions.",
    award_title: "Employee of the Year - Rated A+",
    award_desc: "Awarded top rating A+ in annual corporate review; honored as outstanding contributor for Digital Transformation and company initiatives.",
    cert1_desc: "Advanced certification covering SQL query execution plans, indexing strategies, stored procedure tuning, and high-concurrency database optimization.",
    cert2_desc: "Professional cross-platform engineering with Flutter, Riverpod state management, custom 2D Canvas rendering, and UI performance profiling.",
    cert3_desc: "Comprehensive foundation in Object-Oriented Programming (OOP), data structures, MVC architecture, and enterprise Java Web development.",
    tag_contact: "Get in Touch",
    contact_title: "Contact Information",
    contact_desc: "Open to discussing collaborative engineering initiatives, high-impact projects, or Senior Fullstack / Tech Lead roles.",
    contact_card_title: "Direct Contact",
    contact_card_desc: "Feel free to reach out directly through any of the channels below.",
    lbl_location: "Location",
    lbl_phone: "Phone / Zalo",
    form_name: "Your Full Name",
    form_email: "Your Email Address",
    form_msg: "Message / Inquiry",
    btn_send_msg: "Send Message",
    footer_subtitle: "Fullstack Software Engineer (.NET 8 • Flutter • IoT Cloud)"
  }
};

// State
let currentLang = localStorage.getItem('portfolio_lang') || 'vi';

// Apply Language
function setLanguage(lang) {
  if (!i18nData[lang]) return;
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  document.documentElement.lang = lang;

  // Update button active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update translatable elements
  const dict = i18nData[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update Title
  if (lang === 'vi') {
    document.title = "Vũ Minh Hiếu | Kỹ Sư Phần Mềm Fullstack (.NET & Flutter)";
  } else {
    document.title = "Vu Minh Hieu | Fullstack Software Engineer (.NET & Flutter)";
  }
}

// Mobile Menu Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

// Remove mobile menu on nav link click
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu) navMenu.classList.remove('show');
  });
});

// Scroll Active Link Highlight
const sections = document.querySelectorAll('section[id]');
function highlightActiveSection() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.nav-menu a[href*="#${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add('active-link');
      } else {
        navLink.classList.remove('active-link');
      }
    }
  });
}
window.addEventListener('scroll', highlightActiveSection);

// Init Language Switcher buttons
document.getElementById('btn-lang-vi')?.addEventListener('click', () => setLanguage('vi'));
document.getElementById('btn-lang-en')?.addEventListener('click', () => setLanguage('en'));

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  highlightActiveSection();
});
