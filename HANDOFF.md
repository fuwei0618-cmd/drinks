# 飲料團購點單：交接說明

開新對話時，把這份貼給 Claude（或說「請先讀 GitHub fuwei0618-cmd/drinks 的 HANDOFF.md」）。

## 網址與位置
- 點單網頁：https://fuwei0618-cmd.github.io/drinks/
- GitHub repo：fuwei0618-cmd/drinks（index.html、icon.png、manifest.json、Code.gs）
- 後台：Google 試算表「飲料團購」＋ Apps Script（Code.gs）
- Apps Script 網址（已寫在 index.html 的 API_URL）：
  https://script.google.com/macros/s/AKfycbzvYZXg9k8psdcJavOMXgA02lc1aZ-pFuIaHc8ypqFDN2Qnpvl89p6Z1pbfOquesUS3/exec
- 試算表分頁：設定、菜單、活動、開單、訂單

## 店家
紅茶大苑 國鼎店｜LINE https://line.me/R/ti/p/@059kotda｜急件 0916-014-100｜外送先電話確認：馥瑋二哥 0976846330
取餐：國泰1F取餐（無上樓服務）｜桃園區中山路845號1F
時間：一般最早 11:30，含珍珠 12:30 之後

## 三種角色
1. 選單管理（管理密碼）：活動、菜單、價格、優惠價、店家資訊、密碼
2. 負責人（各活動自己的負責人密碼）：開單、改日期/時間/取餐方式、截止、結帳、複製 LINE 訊息與開單通知
3. 點飲料：用每張單的專屬連結（?s=單號）點單；手機記住名字與上次點的

## 目前規則
- 活動：綜藝大賞 10/5–11/22，老闆贊助，整個活動總額度 $2000（每結帳一張扣一次）
- 自取：有優惠價的品項用優惠價、不再打折；其他品項乘自取折扣（綜藝大賞目前 1＝原價）
- 外送：原價合計 × 外送折扣（綜藝大賞 0.9）；原價約 $500 以上
- 優惠：微檸檬冬瓜 XL 自取 35（原價 45）
- 流程：開單（取餐方式可先不決定）→ 點單 → 截止 → 選自取/外送 → 確認結帳 → 複製 LINE 訊息給店家
- 大家看得到同一張單其他人點了什麼（可折疊）

## 修改方式
- 改價格、活動、密碼：網頁「選單管理」，不用改程式
- 改網頁外觀/功能：Claude 改 index.html 後直接推上 GitHub（已授權 Claude GitHub App）
  - 每次推新版要更新 index.html 裡的 APP_VERSION，手機才會自動換新版
- 改後台（Code.gs）：貼到 Apps Script → 存檔 → 部署 → 管理部署作業 → 編輯 → 新版本 → 部署（網址不變）

## 待辦／備註
- 預設密碼（管理 0000、綜藝大賞 1234、日常團購 5678）若還沒改，請盡快改
- Code.gs 下次更新時：讀取不需要上鎖（多人同時使用會更順）；Repo 內的 Code.gs 已含「自取有優惠不再打折」新規則，但試算表端尚未貼上（目前自取折扣=1，結果相同）
