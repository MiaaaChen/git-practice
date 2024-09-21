# week-02

## 安裝的 Node.js 版本

![釋出時間表](https://nodejs.org/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fnodejs%2FRelease%2Fmain%2Fschedule.svg%3Fsanitize%3Dtrue&w=3840&q=75&dpl=dpl_ETQPFPXj29b4P2rVPtRBGVgoptDW)

> source: [nodejs.org](https://nodejs.org/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fnodejs%2FRelease%2Fmain%2Fschedule.svg%3Fsanitize%3Dtrue&w=3840&q=75&dpl=dpl_ETQPFPXj29b4P2rVPtRBGVgoptDW)

我安裝的是 v20.17.0，這是目前的 LTS 版本，相較於最新的 Current 版本 (v22.9.0)，LTS 版本提供長期支援和穩定性。

## nvm 與 npm 分別是什麼

### **nvm (Node Version Manager)**

nvm 是用於管理和切換 Node.js 版本的工具。不同專案下使用的版本可能不同，所以可透過 nvm 來切換以符合版本需求，也可用來測試專案在不同 Node.js 版本下的運行狀況。

常用指令：

-   安裝指定版本 `nvm install 20`
-   切換版本 `nvm use 22`
-   查看已安裝的版本 `nvm ls`

### **npm (Node Package Manager)**

npm 是用來管理套件的工具，用於安裝、更新、卸載專案使用到的套件。透過 npm 可以從官方下載各類開源的 Node.js 模組和函式庫。

常用指令：

-   初始化專案 `npm init`，生成 package.json
-   安裝套件 `npm install express`，套件存放在 node_modules，套件資訊記錄在 package.json
-   更新套件 `npm update`
