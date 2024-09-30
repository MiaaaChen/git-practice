# readme.md

## package.json 中的 dependencies 與 devDepenencies

**dependencies**：這是專案在執行時 (runtime) 所需的套件。當使用 npm install 指令時，這些套件會被自動安裝。

**devDependencies**：這是專案在開發時 (development) 所需的套件。這些套件包括測試框架、編譯器、壓縮工具等，並非在應用程式執行時所需。當使用 npm install --production 安裝時，devDependencies 會被忽略。

## package.json 中的 scripts 這個區塊怎麼用？

scripts 區塊用於定義專案中的常用指令，方便在開發時部署和執行各種任務。

例如：

```json
{
    "scripts": {
        "start": "node app.js",
        "test": "jest",
        "build": "webpack --config webpack.config.js"
    }
}
```

執行指令：使用 npm run 執行，但特殊指令如 start, test 可省略 run。

```
npm start
npm test
npm run build
```

用途：

1. 簡化指令：將複雜的命令封裝成簡單的腳本名稱。
2. 統一管理：方便團隊成員一致地執行相同的任務。

## Port number 要怎麼以環境變數來決定？

使用 process.env.PORT 來取得環境變數 PORT 的值，可以根據不同環境設定不同 port number。

例如：

```javascript
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}$`);
});
```

## 哪些檔案應該要被放上 github repo？

### 應該上傳的檔案：

-   原始碼檔案：例如 .js, .html, .css 等，這些是專案的核心內容。
-   配置檔案：package.json, webpack.config.js 等，包含專案設定和依賴關係。
-   文件檔案： README.md, LICENSE 等，提供專案說明和協作資訊。

### 不應該上傳的檔案：

-   node_modules 資料夾：因為檔案太大且可透過 npm install 重建，不需納入版本控制。
-   敏感資訊檔案：.env 可能包含 API 金鑰、密碼等資料，為了安全性不應該上傳。
-   編譯後的檔案：dist/, build/ 資料夾，這些是建置產物，可以在部屬時生成。
-   作業系統產生的檔案：.DS_Store 等，無關專案進行。

### 決策要素：

1. 再生性：可以從原始檔案或指令生成的不需上傳，減少儲存空間也避免版本衝突。
2. 敏感性：涉及機密資訊的檔案需要保密，避免資安風險。
3. 必要性：確保他人可順利運行專案的相關檔案應該上傳。

## CJS vs ESM ，兩者分別怎麼用？

### CJS (CommonJS)

匯入模組：

```javascript
const moduleA = require("./moduleA");
```

匯出模組：

```javascript
module.exports = function () {
    // ...
};
```

特點：

1. 傳統的 Node.js 模組系統。
2. 同步加載模組。

### ESM (ECMAScript Modules)

匯入模組：

```javascript
import moduleA from "/moduleA.js";
```

匯出模組：

```javascript
export default function () {
    // ...
}
```

特點：

1. 現代 JavaScript 標準，瀏覽器和 Node.js 都支援。
2. 在 Node.js 中使用需要在 package.json 中設定：

    ```json
    {
        "type": "module"
    }
    ```

## localhost 是什麼？

localhost 是一個指向本機電腦的網路主機名。它通常解析為 IP 位址 127.0.0.1，這個位址被稱為本地回送位址（loopback address）。

特點：

1. 本地回送測試： localhost 允許在沒有網路連接的情況下，與自己電腦上的服務器進行通訊。
2. 開發測試： 開發者常用 localhost 來測試網頁、應用程式或服務器設置，因為它不需要連接外部網路。
3. 安全性： 使用 localhost 進行測試，不會對外部網路造成影響，也不會受到外部網路的干擾。

## curl 是什麼？如何用 curl 測試網路連線？常用參數有哪些？

curl 是一個用於傳輸資料的命令列工具，支持多種協議（如 HTTP、HTTPS、FTP 等）。它可以在終端中發送網路請求，並顯示伺服器的回應。

用途：

1. 測試網路連接： 檢查與服務器之間的連接是否正常。
2. 測試 API： 發送 HTTP 請求，查看 API 的返回結果。
3. 下載文件： 從網路下載文件或資料。

### 如何使用 curl 測試網路連線

1. **基本用法**：

-   發送 GET 請求：這會請求 http://example.com，並在終端中顯示回應內容。

    ```
    curl http://example.com
    ```

2. **常用參數**：

-   -I 或 --head：獲取回應 header 資訊，而不下載整個內容。

    ```
    curl -I http://example.com
    ```

-   -X：指定請求方法（GET、POST、PUT、DELETE 等）。

    ```
    curl -X POST http://example.com/api
    ```

-   -d 或 --data：發送資料（通常與 POST 請求一起使用）。

    ```
    curl -X POST -d "param1=value1&param2=value2" http://example.com/api
    ```

-   -o 或 --output：將回應輸出到文件。
    ```
    curl -o output.html http://example.com
    ```

3. **測試網路連線**：

-   檢查服務器：如果服務器正在運行，會返回 HTTP 狀態碼。

    ```
    curl -I http://localhost:3000
    ```

-   測試 API 回應：查看 API 返回的資料。
    ```
    curl -X GET http://api.example.com/data
    ```
