# OSM 查詢圖徵項目名稱複製按鈕 🗺️

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-V1.0.1-brightgreen.svg)](osm-feature-name-copier.user.js)
[![Tampermonkey](https://img.shields.io/badge/Tampermonkey-Supported-00485B?logo=tampermonkey)](https://www.tampermonkey.net/)
[![Platform](https://img.shields.io/badge/Platform-OpenStreetMap-7EBC6F?logo=openstreetmap&logoColor=white)](https://www.openstreetmap.org/)

這是一支為 [OpenStreetMap (OSM)](https://www.openstreetmap.org/) 所量身打造的使用者腳本（Userscript / Tampermonkey 腳本）。

當你在 OSM 地圖上使用「查詢圖徵」功能時，腳本會在每個查詢結果項目的右側自動附加一顆「**複製**」按鈕，讓你能一鍵精準複製純圖徵名稱，大幅節省地圖協作與資料查閱時的複製貼上時間！

---

## 💡 解決的痛點

- **手動選取易誤觸跳轉**：OSM 的圖徵項目整列都是連結（`stretched-link`），手動用滑鼠選取文字時經常不慎點擊並跳轉頁面。
- **文字包含多餘分類**：清單文字常為「`公園 張學良園區`」或「`便利商店 7-ELEVEn`」，手動複製往往會連同前方的類別一起複製進剪貼簿。
- **本腳本優勢**：
  - 獨立按鈕點擊，阻斷事件傳遞（不會誤觸連結）。
  - 自動剖析 DOM 結構，精準擷取圖徵名稱。

---

## ✨ 功能特色

- 🎯 **精準抓取**：只複製 `<a>` 標籤內的名稱文字，自動過濾掉前面的分類項目與多餘空白。
- ⚡ **無縫整合**：採用 OSM 既有的 Bootstrap 樣式設計，並懸浮固定於右側，排版自然不突兀。
- 🔄 **動態監聽**：支援 Turbo / Ajax 異步載入，換區查詢或點選不同圖徵時自動辨識，無需重新整理。
- 🛡️ **穩定複製**：使用 `GM_setClipboard` 剪貼簿 API，跨瀏覽器皆能穩定複製。

---

## 🚀 安裝方式

### 步驟 1：安裝使用者腳本管理器擴充
請依據你使用的瀏覽器安裝下列任一管理器（推薦 Tampermonkey 或 Violentmonkey）：
- [Tampermonkey (油猴)](https://www.tampermonkey.net/)
- [Violentmonkey (暴力猴)](https://violentmonkey.github.io/)
- [ScriptCat (腳本貓)](https://scriptcat.org/)

### 步驟 2：安裝腳本
- **手動安裝**：
  1. 開啟 [osm-feature-name-copier.user.js](osm-feature-name-copier.user.js) 檔案並複製全部原始碼。
  2. 點開瀏覽器右上角腳本管理器圖示，選擇「**新增腳本**」。
  3. 將程式碼貼入並儲存（`Ctrl + S`）。
- **網址直裝**：
  點擊 [Raw 檔案連結](https://raw.githubusercontent.com/qwe987299/osm-feature-name-copier/main/osm-feature-name-copier.user.js) 即可一鍵觸發擴充套件安裝畫面。

---

## 📖 使用教學

1. 前往 [OpenStreetMap 官方網站](https://www.openstreetmap.org/)。
2. 點擊地圖右側工具列的 **「查詢圖徵」**（問號圖示）。
3. 在地圖任一位置點擊左鍵，左側側邊欄將列出周邊物件（鄰近物件 / 圍閉物件）。
4. 列表項目右側會出現 **「複製」** 按鈕，點擊後按鈕會變更為綠色 **「已複製」**，代表圖徵名稱已成功複製到剪貼簿！

---

## 🛠️ 相容性與技術規格

| 項目 | 支援情況 |
| :--- | :--- |
| **適用網址** | `https://www.openstreetmap.org/*` |
| **瀏覽器環境** | Chrome, Edge, Firefox, Brave, Safari (支援最新版現代瀏覽器) |
| **腳本管理器** | Tampermonkey, Violentmonkey, ScriptCat, Greasemonkey 等 |
| **授權條款** | [MIT License](LICENSE) |

---

## 📝 更新日誌

### V1.0.1
- 新增官方網站作品介紹頁面與 GitHub 儲存庫連結資訊。
- 優化專案文件與安裝指引。

### V1.0
- 初版發布：支援 OpenStreetMap 查詢圖徵列表一鍵複製名稱功能。

---

## 💻 開發與授權

- **作者**：萌芽站長
- **官方網站**：[作品介紹頁面](https://mnya.tw/dv/work/046.html)
- **原始碼倉庫**：[GitHub (qwe987299/osm-feature-name-copier)](https://github.com/qwe987299/osm-feature-name-copier/)
- **版權**：萌芽系列網站 ‧ Mnya Series Website ‧ [Mnya.tw](https://mnya.tw)
- **授權**：[MIT License](LICENSE)