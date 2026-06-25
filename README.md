<div align="center">

<img src="https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge" alt="Version"/>
<img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="License"/>
<img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
<img src="https://img.shields.io/badge/Puppeteer-Scraping-40B5A4?style=for-the-badge&logo=puppeteer&logoColor=white" alt="Puppeteer"/>

# 🔍 Keywords Scraper

### Multi-Platform Keyword & Hashtag Suggestion Tool
**Powered by Web Scraping & Public Autocomplete APIs**

*Supercharge your SEO, content strategy, and app store optimization — all from one tool.*

</div>

---

## 📌 Overview

**Keywords Scraper** is a developer-friendly, multi-platform keyword research tool that aggregates autocomplete suggestions from major search engines and app stores. Built with Node.js and Puppeteer, it provides fast, localized keyword data through clean REST API endpoints — no paid subscriptions required.

Whether you're an SEO specialist, content creator, digital marketer, or indie app developer, this tool helps you discover what real users are searching for, right now.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌐 **Multi-Platform** | Google, YouTube, Bing, Amazon, TikTok, App Store, Play Store |
| 🌍 **Localization** | Country & language-specific keyword results |
| ⚡ **Fast REST API** | Clean endpoints, easy to integrate into any workflow |
| 🧠 **Smart Like System** | Likes are consolidated to the most popular record per keyword/platform |
| 📊 **Analytics Logging** | Detailed logs for tracking keyword popularity and distribution |
| 🔌 **Extensible** | Easily add new platforms (Instagram, Pinterest, Twitter, etc.) |
| 📱 **Frontend Ready** | Compatible with React, Flutter, or any HTTP client |

---

## 🖥️ Screenshots

<div align="center">

| Search Panel | Suggestions View |
|:---:|:---:|
| ![Search Panel](https://github.com/user-attachments/assets/a020147d-d86f-43ab-9f84-2db148e57073) | ![Suggestions View](https://github.com/user-attachments/assets/9ed006ff-00ae-498b-a19c-8d9fe85b224c) |

| Country & Language Filters | Mobile View |
|:---:|:---:|
| ![Filters](https://github.com/user-attachments/assets/c8069658-5c80-4b3e-bd08-d65fe655e004) | ![Mobile](https://github.com/user-attachments/assets/189c699a-6095-41ee-8669-6a8488382e51) |

</div>

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Scraping** | Puppeteer + `puppeteer-extra` stealth plugin |
| **Data Sources** | Public autocomplete APIs (Google, YouTube, Bing, Amazon, etc.) |
| **Frontend** | React / Flutter *(optional integration)* |
| **Deployment** | Localhost · Render · Railway · Vercel |

---

## 📦 Installation

**Prerequisites:** Node.js v16+ and npm installed.

```bash
# 1. Clone the repository
git clone https://github.com/muhammadmaaz-2k5/KEYWORDS-TOOL.git

# 2. Navigate into the project directory
cd KEYWORDS-TOOL/KEYWORD-TOOLS

# 3. Install dependencies
npm install
```

---

## ▶️ Getting Started

### Start the Server

```bash
node platform_keyword_scraper.js
```

The server starts on `http://localhost:3000` by default.

---

## 🔗 API Reference

### Endpoints

| Platform | Endpoint | Example |
|---|---|---|
| **Google** | `/api/google` | `GET /api/google?query=fitness` |
| **YouTube** | `/api/youtube` | `GET /api/youtube?query=fitness` |
| **TikTok** | `/api/tiktok` | `GET /api/tiktok?query=fitness` |
| **Bing** | `/api/bing` | `GET /api/bing?query=fitness` |
| **Amazon** | `/api/amazon` | `GET /api/amazon?query=fitness&region=com` |
| **App Store** | `/api/appstore` | `GET /api/appstore?query=fitness` |
| **Play Store** | `/api/playstore` | `GET /api/playstore?query=fitness` |

### Query Parameters

| Parameter | Type | Description | Example |
|---|---|---|---|
| `query` | `string` | **Required.** Keyword to search | `fitness` |
| `region` | `string` | Amazon marketplace region | `com`, `co.uk`, `de` |
| `language` | `string` | Language code for localized results | `en`, `fr`, `de` |
| `country` | `string` | Country code for localized results | `us`, `gb`, `pk` |

### Sample Response

```json
{
  "platform": "google",
  "query": "fitness",
  "suggestions": [
    "fitness tips",
    "fitness tracker",
    "fitness workout at home",
    "fitness goals"
  ],
  "language": "en",
  "country": "us"
}
```

---

## 🧠 Smart Like System

The tool features an intelligent like-consolidation system across all platform controllers. When a user likes a keyword result, the system automatically identifies and updates the **most popular existing record** for that keyword/platform combination — preventing duplicate entries and keeping analytics clean.

```
✅ Like added to record with most likes: fitness (google)
   Record ID: 123 | Total Likes: 15

📊 Found 3 total records for this query/platform:
   1. ID: 123 | Likes: 15 | Created: 2024-01-15 | en / us
   2. ID: 124 | Likes: 8  | Created: 2024-01-10 | fr / fr
   3. ID: 125 | Likes: 3  | Created: 2024-01-05 | de / de
```

**Supported Controllers:**
- ✅ `googleController.js`
- ✅ `youtubeController.js`
- ✅ `bingController.js`
- ✅ `playstoreController.js`
- ✅ `appstoreController.js`

---

## 📁 Project Structure

```
KEYWORD-TOOLS/
├── controllers/
│   ├── googleController.js
│   ├── youtubeController.js
│   ├── bingController.js
│   ├── playstoreController.js
│   └── appstoreController.js
├── routes/
│   └── api.js
├── platform_keyword_scraper.js   # Main entry point
├── package.json
└── README.md
```

---

## 🚀 Roadmap

- [ ] Instagram hashtag suggestions
- [ ] Pinterest keyword integration
- [ ] Twitter/X trending topics
- [ ] Export results to CSV / JSON
- [ ] Frontend dashboard (React)
- [ ] Flutter mobile app
- [ ] Redis caching layer
- [ ] Rate limiting & API key auth

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

```bash
# Fork the repo, then clone your fork
git clone https://github.com/YOUR_USERNAME/KEYWORDS-TOOL.git

# Create a feature branch
git checkout -b feature/add-instagram-support

# Make your changes, then commit
git commit -m "feat: add Instagram hashtag endpoint"

# Push and open a Pull Request
git push origin feature/add-instagram-support
```

**Ideas for contributions:**
- Add support for new platforms (Twitter, Pinterest, Reddit)
- Build a React or Flutter frontend
- Add CSV/JSON export functionality
- Improve stealth scraping reliability

---

## ⚖️ Legal & Ethics

> ⚠️ This tool uses **public autocomplete endpoints** and **user-simulated browser requests**.

- Do **not** spam or abuse platform APIs
- Respect each platform's **rate limits**
- Review the **Terms of Service** of each platform before any commercial use
- This tool is intended for **research, SEO analysis, and content strategy** purposes only

---

## 📄 License

This project is licensed under the **[MIT License](LICENSE)** — free to use, modify, and distribute.

---

## 👨‍💻 Author

<div align="center">

**Dr Tools**

[![Email](https://img.shields.io/badge/Email-drtoolofficial%40gmail.com-red?style=flat-square&logo=gmail)](mailto:drtoolofficial@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-muhammadmaaz--2k5-black?style=flat-square&logo=github)](https://github.com/muhammadmaaz-2k5)

</div>

---

<div align="center">

**⭐ If this project helped you, please give it a star — it means a lot!**

*🚀 Boost your reach. Optimize your content. Stay ahead of the trend.*

</div>
