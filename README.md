# 慢慢探索：H5P 互動網站三版本

以繁體中文呈現影片、遊戲與探索任務的公開靜態網站。保留原版，另外提供兩個不同方向的優化版本。

## 線上體驗

- [影片與遊戲主網站](https://yuenfeng0910.github.io/slowplay-websites/)
- [原版：慢慢探索](https://yuenfeng0910.github.io/slowplay-websites/original/)
- [優化版 A：拾光探險／地圖闖關](https://yuenfeng0910.github.io/slowplay-websites/map/)
- [優化版 B：知行放映室／影片任務工作台](https://yuenfeng0910.github.io/slowplay-websites/studio/)

## 三個版本

| 版本 | 重點 | 功能 |
|---|---|---|
| original | 內容探索首頁 | 主題篩選、H5P 互動影片示範、原生問答與配對、YouTube/Vimeo 預覽 |
| map | 地圖探索與旅人護照 | 原創示意地圖、H5P 互動影片、H5P 記憶遊戲、本地三題問答、印章收集 |
| studio | 影片與任務工作台 | H5P 影片／遊戲切換、任務搜尋、進度、本機筆記儲存與 TXT 匯出 |

免登入，支援電腦與手機瀏覽器。每個版本的進度獨立儲存在瀏覽器，不跨裝置同步。

## 本機開啟

直接開啟根目錄 index.html；或在儲存庫根目錄執行：

```sh
python3 -m http.server 8080
```

瀏覽 http://localhost:8080 。網站不需要 npm、後端或編譯。

## GitHub Pages

設定 Settings → Pages → Deploy from a branch → main → /(root)。更新檔案並推送 main 後，GitHub Pages 會重新發布。

## 外部示範、素材及限制

- H5P 官方 Interactive Video：https://h5p.org/interactive-video；公開嵌入 https://h5p.org/h5p/embed/617 。
- H5P 官方 Memory Game：https://h5p.org/memory-game；公開嵌入 https://h5p.org/h5p/embed/707 。
- 原版另提供 Big Buck Bunny 預告作播放器示範，來源 Blender Foundation（https://peach.blender.org/），CC BY 3.0，媒體鏡像 https://media.w3.org/2010/05/bunny/trailer.mp4 。
- H5P 作品以原作者各作品的版權標示為準；只是嵌入公開示範，未重新打包或宣稱擁有其內容。
- 畫面中的地圖是原創探索示意圖，不代表真實地理位置；插畫採 CSS/SVG。
- 尚未取得回甘或其他地方正式影片，沒有假冒實拍。正式素材與中文 H5P 題目待替換。
- H5P 的外站成績未整合：影片與記憶站的完成按鈕為使用者自行確認，本地問答全對後才完成。
- 無 H5P 編輯後台、使用者帳號、跨裝置紀錄或伺服器成績追蹤。
- 外部影片／遊戲受原平台服務、網路環境與嵌入政策影響。

## 目錄

```text
index.html       版本比較首頁
assets/          各版本預覽截圖
original/        原版
map/             地圖闖關版
studio/          影片任務版
```

## 黎明 RGB 小旅行遊戲整合

- 遊戲專頁：https://yuenfeng0910.github.io/slowplay-websites/village/
- 遊戲本體獨立網址：https://yuenfeng0910.github.io/limin-rgb-game/
- 遊戲本體獨立儲存庫：https://github.com/yuenfeng0910/limin-rgb-game
- 首頁與三個版本都新增遊戲入口；可在本站 iframe 遊玩、重新載入、全螢幕或另開完整遊戲。
- 本站嵌入正式 GitHub Pages 遊戲，不再依賴原 trycloudflare 臨時通道。遊戲程式與必要照片、短片存放在獨立遊戲儲存庫。
- 遊戲內進度保存在瀏覽器，由遊戲管理，不會自動同步 H5P 或本站印章。

## 主首頁已使用正式影片與遊戲

首頁已改為恩鳳提供的 15 秒影片與黎明 RGB 小旅行，不再以 H5P 官方範例或版型列表作為主要內容。影片由獨立遊戲儲存庫託管；先前版型入口保留在 versions/。原有 original/、map/、studio/ 路徑不刪除。
