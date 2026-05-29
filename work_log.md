# 📝 工作日誌 (Work Log)

## 📅 基本資訊
- **日期**：2026-05-29
- **專案名稱**：[L2-DIC1 - Ian's Live DateTime Landing Page](https://github.com/ian0629082/L2-DIC1)
- **開發人員**：Ian & Antigravity AI
- **目前狀態**：已完成基礎開發並成功上傳至 GitHub

---

## 🛠️ 今日完成事項與開發細節

### 1. 網頁前端基礎開發
設計並實作了一個具備磨砂玻璃質感（Glassmorphism）的個人化首頁：
* **`index.html`**：
  - 建立語意化的 HTML5 結構。
  - 設定行動裝置響應式與基本的 SEO Meta 標籤。
  - 規劃時間顯示容器與問候語區域。
* **`index.css`**：
  - 引入 Google Fonts (`Outfit` & `Inter`) 提升排版質感。
  - 設計背景動態漸變與霓虹發光圓球（Glowing Ambient Orbs）。
  - 實作毛玻璃卡片樣式、微動態懸停特效（Micro-animations）。
* **`app.js`**：
  - 實作每秒更新的動態時鐘與客製化的序數日期格式（如 `May 29th, 2026`）。
  - 根據當前小時動態切換問候語（早安、午安、晚安等）。
  - 提供 12 小時制（AM/PM）與 24 小時制的切換按鈕功能。

### 2. 本地端運行與測試
* 使用 `npx http-server` 啟動本地測試伺服器（埠號 `8080`），進行跨瀏覽器與響應式排版驗證。

### 3. Git 版本控制與 GitHub 託管
* 初始化本地 Git 儲存庫並提交初始版本。
* 連結遠端 GitHub 儲存庫 `https://github.com/ian0629082/L2-DIC1.git`。
* 成功將所有專案程式碼推送（Push）至 `main` 分支。

### 4. 說明文件撰寫
* 建立 `README.md`，說明專案特色、架構與本地運行方式。
* 依據需求，於 `README.md` 中新增 Live Demo 連結：
  - 👉 [Live Demo 連結](https://ian0629082.github.io/L2-DIC1/)

---

## 📈 後續規劃與優化建議
1. **設定 GitHub Pages**：確保遠端倉庫開啟 Pages 服務，讓外部可直接透過 Live Demo 網址訪問。
2. **多主題切換**：未來可考慮加入深色/淺色手動切換或隨系統時間自動變更主題色系。
