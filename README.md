# Vu Minh Hieu (Hiếu Minh Vũ) — Enterprise Fullstack & IoT Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/.NET_8-512BD4?style=for-the-badge&logo=dotnet&logoColor=white" alt=".NET 8" />
  <img src="https://img.shields.io/badge/Flutter_3.x-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter" />
  <img src="https://img.shields.io/badge/React_18_MFE-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/AWS_IoT_Core-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS IoT" />
  <img src="https://img.shields.io/badge/Tuya_SmartLife_SDK-FF5722?style=for-the-badge&logo=tuya&logoColor=white" alt="Tuya SDK" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/SQL_Server_Tuning-CC292B?style=for-the-badge&logo=microsoftsqlserver&logoColor=white" alt="SQL Server" />
  <img src="https://img.shields.io/badge/Clean_Architecture-22C55E?style=for-the-badge" alt="Clean Architecture" />
</p>

<p align="center">
  🌐 <strong>Live Demo:</strong> <a href="https://hieuvm688.github.io/Myportfolio_HieuMinhVu/">https://hieuvm688.github.io/Myportfolio_HieuMinhVu/</a><br>
  📱 <strong>Bilingual Portfolio:</strong> Seamless instant switching between <strong>Tiếng Việt (VI)</strong> and <strong>English (EN)</strong> with zero page reload.
</p>

---

## 👨‍💻 Executive Summary / Tổng Quan Chuyên Môn

**Vu Minh Hieu** is an Enterprise Fullstack Software Engineer with **3+ years of battle-tested production experience** architecting and scaling mission-critical Backend systems, Cross-platform Mobile applications, and Dual-Track Smart Home IoT ecosystems across tier-one manufacturing and consumer electronics corporations:

- **Sunhouse Technology and Application JSC (Sunhouse Group JSC):** Fullstack Developer (.NET 8 & Flutter), driving the flagship **eSunhouse V2 Super App**, dual-track IoT Cloud integrations (AWS IoT Core MQTT + ESP32 BLE & Tuya SmartLife SDK / Sweeper P2P Laser 2D Map), and enterprise e-Warranty, DMS & Loyalty modules.
- **Brother Industrial Vietnam:** Software Engineer (.NET & Cross-platform), designing core internal Digital Transformation (DX) systems, leading database SQL Performance Tuning, creating Core Shared Libraries, and deploying mission-critical systems across Vietnam, Hong Kong, and Japan branches. Honored with **Employee of the Year - Rated A+** in the 2024 annual performance review.

---

## 🏛️ Core Technical Pillars / 4 Trụ Cột Kỹ Thuật

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                             VU MINH HIEU - TECH STACK                            │
└──────────────────────────────────────┬───────────────────────────────────────────┘
                                       │
        ┌──────────────────────────────┼─────────────────────────────┐
        ▼                              ▼                             ▼
┌──────────────────┐           ┌──────────────────┐          ┌───────────────────┐
│     BACKEND &    │           │  MOBILE, BRIDGE  │          │   SMART HOME IOT  │
│   ARCHITECTURE   │           │   & FRONTEND     │          │    & FIRMWARE     │
├──────────────────┤           ├──────────────────┤          ├───────────────────┤
│ • .NET 6/7/8 C#  │           │ • Flutter 3.x    │          │ • AWS IoT Core    │
│ • ASP.NET Web API│           │ • Riverpod 2.x   │          │   (MQTT SigV4)    │
│ • BFF (YARP)     │           │ • Custom 2D      │          │ • ESP32 BLE Prov  │
│ • CQRS (MediatR) │           │   Canvas Paint   │          │   (ECDH / AES)    │
│ • gRPC & SignalR │           │ • Native Method  │          │ • Tuya SmartLife  │
│ • Dapper & EF    │           │   & EventChannels│          │   App SDK         │
│ • Redis Cache    │           │   (Kotlin/Swift) │          │ • Tuya Sweeper P2P│
│ • Clean Arch     │           │ • React 18 MFE   │          │   (LZ4 2D Map)    │
│ • SOLID & DI     │           │   (Vite Module   │          │ • Tuya Cloud Auth │
│ • MinIO S3       │           │   Federation)    │          │   (HMAC-SHA256)   │
│ • OpenTelemetry  │           │ • WPF MVVM XAML  │          │ • Optimistic UI   │
└──────────────────┘           └──────────────────┘          └───────────────────┘
                                       │
                                       ▼
                       ┌──────────────────────────────┐
                       │      DATABASE, DEVOPS &      │
                       │       QUALITY STANDARDS      │
                       ├──────────────────────────────┤
                       │ • PostgreSQL & SQL Server    │
                       │ • Certified SQL Query Tuning │
                       │ • Execution Plan & Indexing  │
                       │ • Docker, CI/CD, Git Flow    │
                       │ • Firebase (FCM, RemoteCfg)  │
                       │ • Japanese DX & Horenso      │
                       └──────────────────────────────┘
```

---

## 🚀 Featured Enterprise Projects / Dự Án Trọng Điểm

### 1. eSunhouse V2 Super App, Smart Home IoT & e-Warranty Ecosystem
- **Organization:** Sunhouse Group JSC (10/2025 - Present)
- **Role:** Fullstack Developer (.NET & Flutter)
- **Architecture & Highlights:**
  - Architected cross-platform Super App with feature-first Clean Architecture and Riverpod 2.x state management.
  - **AWS IoT Track:** Engineered ESP32 BLE Provisioning using Protocomm Security 1 (ECDH Curve25519, AES-CTR); real-time MQTT SigV4 communication via WebSocket + AWS Cognito/STS credentials; Optimistic UI with DebounceState and ACK resolution for zero-flicker experience; Vietnamese NLP Voice Control.
  - **Tuya IoT Track:** Implemented custom Native Platform Channels (Kotlin, Swift, Objective-C) wrapping Tuya SmartLife SDK & Tuya Cloud; decoded P2P LZ4 binary streams (Sweeper SDK) to render dynamic 2D Laser Robot Maps on Flutter Canvas in real time.
  - **Business Modules:** End-to-end electronic warranty (e-Warranty) lookup/activation, Dealer Management System (DMS), Loyalty coin redemption (Sunhouse Xu) with strict Idempotency and Contextual Palette tiering.

### 2. Order Management & Electronic Approval System (OMS)
- **Organization:** Brother Industrial Vietnam (01/2025 - 06/2025)
- **Role:** Solo Fullstack Developer (.NET 8, SQL Server)
- **Architecture & Highlights:**
  - 100% digitized internal purchase orders and requisition workflows for the Engineering Development Department.
  - Replaced paper approvals with multi-tiered role-based electronic approvals (e-Approval) and audit logs.
  - Drastically accelerated cycle times, cut operational paper costs, and improved traceability.

### 3. Cross-platform International Rack Logistics App
- **Organization:** Brother Industrial Vietnam (12/2024 - 02/2025)
- **Role:** Cross-platform Engineer (Flutter iOS/Desktop/Web, ASP.NET Core)
- **Architecture & Highlights:**
  - Developed a unified logistics tracking system for the Logistics Dept, monitoring cargo rack movement across international factory pipelines.
  - High-speed hardware-accelerated QR Code scanning, i18n multi-language support (English/Vietnamese/Japanese).
  - Rescued an overdue legacy system schedule and successfully deployed into production across Hong Kong and Japan branches.

### 4. Engineering Design Change Management System
- **Organization:** Brother Industrial Vietnam (09/2024 - 12/2024)
- **Role:** Desktop & Database Engineer (WPF, C#, MVVM, SQL Server)
- **Architecture & Highlights:**
  - Automated technical drawing revisions and release procedures for the Maintenance Engineering Dept.
  - Integrated high-security Digital Signatures (e-Signature) and QR code document verification.
  - Replaced unstable legacy tools with a rock-solid MVVM desktop architecture.

---

## 🏆 Certifications & Recognitions / Chứng Chỉ & Giải Thưởng

1. **Employee of the Year - Rated A+ (12/2024):** Brother Industrial Vietnam annual performance review recognition for Digital Transformation leadership and operational excellence.
2. **Performance Tuning and Optimizing SQL Databases (02/2025 - 04/2025):** Advanced database certification focusing on query plan analysis, indexing strategies, locking mechanisms, and stored procedure optimization.
3. **Cross Platform Application Programming - Flutter (05/2025 - 07/2025):** Professional cross-platform engineering, custom 2D Canvas rendering, and clean architecture state coordination.
4. **Full Stack Web Programming - Java Web (07/2022 - 02/2023):** Comprehensive enterprise OOP, data structures, and web application design.

---

## ⚡ Portfolio Website Architecture / Tính Năng Kỹ Thuật

- **Zero-Dependency Lightweight Core:** Built with semantic HTML5, modern vanilla CSS3 (CSS Variables, Flexbox, CSS Grid, Glassmorphism, Ambient Glows), and vanilla JavaScript.
- **Client-Side Instant Bilingual Engine:** Complete dual-language dictionary (**89 translation keys** in Vietnamese and English) with zero flicker, dynamic document title and OpenGraph sync, and state persistence in `localStorage`.
- **Responsive & Accessible Design:** Fully responsive layout with custom mobile navigation drawer, fluid typography, and WCAG-compliant contrast ratios.
- **Case-Study Centric:** Structured project showcases highlighting enterprise context, problem statements, architectural solutions, and technical tags.

---

## 📬 Contact & Professional Links / Thông Tin Liên Hệ

- 💼 **LinkedIn:** [https://www.linkedin.com/in/hieuvm688/](https://www.linkedin.com/in/hieuvm688/)
- 💻 **GitHub:** [https://github.com/hieuvm688](https://github.com/hieuvm688)
- 🌐 **Live Portfolio:** [https://hieuvm688.github.io/Myportfolio_HieuMinhVu/](https://hieuvm688.github.io/Myportfolio_HieuMinhVu/)
- 📧 **Email:** [hieuvm.bo.01@gmail.com](mailto:hieuvm.bo.01@gmail.com)
- 📞 **Phone / Zalo:** `0356.239.688`
- 📍 **Location:** Cau Giay / Nam Tu Liem, Hanoi, Vietnam

---
*© 2026 Vu Minh Hieu. All rights reserved. Designed & Engineered with Enterprise Architecture Standards.*
