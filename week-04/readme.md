# week-04

## Public IP

EC2 Instance Public IP: `3.106.229.106`

## 什麼是 Instance type？

AWS EC2 提供的虛擬伺服器配置。每個類型有不同的 CPU、記憶體、儲存體和網路資源，適合不同的工作負載和應用需求。例如，t2.micro 適用於小型應用和測試環境，而 m5.large 更適合大型應用和高效能需求。

## 什麼是 Nginx？有哪些用途與特性？

### Nginx

一個高效能的 HTTP 和反向代理伺服器。它能夠處理大量的並發連接，並提供負載均衡、HTTP 緩存、靜態文件服務等功能。

### 用途

-   反向代理：將客戶端請求轉發到後端伺服器（如 Express 應用）。
-   負載均衡：將請求分配到多個伺服器，提升應用的可擴展性。
-   靜態文件服務：高效地提供靜態資源，如圖片和 CSS 文件

### 特性

-   高效能：能夠處理高並發。
-   低內存占用：比其他伺服器（如 Apache）使用更少的內存。
-   模組化設計：可以通過安裝不同模組擴展功能。

## PM2 套件是什麼？有什麼用處？

### PM2

Node.js 的程序管理工具，提供多種功能來管理應用的生命週期。

### 用途

-   自動重啟：當應用崩潰時自動重啟。
-   集群模式：在多核 CPU 上運行多個程序，提升效能。
-   日誌管理：自動管理應用的日誌，方便排查問題。
-   效能監控：實時監控應用的 CPU 和內存使用情況。

## Proxy 是什麼？為什麼要透過 Nginx 來 proxy 到 Express 開發的 Web Server?

### Proxy

指的是轉發請求的過程。Nginx 作為反向代理，能夠將客戶端的請求轉發到運行中的 Express 應用上。

### 為什麼使用 Nginx 代理

-   安全性：隱藏內部服務器的具體實現和結構。
-   效能：Nginx 可以處理靜態文件並有效地管理連接，減少後端伺服器的負擔。
-   負載均衡：在多個後端伺服器之間分配流量，提高可用性和效能。

### Reverse proxy vs Forward Proxy

-   反向代理：代理伺服器位於使用者和服務器之間，負責轉發請求給內部服務器。
-   正向代理：使用者通過代理伺服器訪問外部網路，常用於繞過網路限制。

## Nginx 設定檔

```
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name 3.106.229.106;  # public IP

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Security Group 是什麼？用途為何？有什麼設定原則嗎？

### Security Group

AWS 的虛擬防火牆，用來控制進出 EC2 Instance 的流量。

### 用途

-   限制對 Instance 的訪問，增強安全性。
-   管理傳入和傳出流量的規則。

### 設定原則

-   僅允許必要的傳入和傳出流量。
-   限制來源 IP 地址，避免使用 0.0.0.0/0 來允許所有流量。

## 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？

### sudo

Linux 中用於以系統管理員權限執行命令的工具。

### 使用時機

-   需要加上 sudo 的情況：執行需要管理權限的操作，如安裝軟體套件、修改系統設定等。
-   不需要的情況：執行普通使用者的操作，如運行應用程式、編輯使用者範圍內的文件等。

## Nginx 的 Log 檔案在哪裡？怎麼找到的？怎麼看 Nginx 的 Log？

### 1. 打開 Nginx 配置文件

```
sudo nano /etc/nginx/nginx.conf
```

### 2. 查找 Log 檔案

access_log 和 error_log 指定 Nginx 日誌的路徑，格式如下：

```
access_log  /var/log/nginx/access.log;
error_log  /var/log/nginx/error.log;
```

-   access_log：這是 Nginx 記錄所有請求的日誌檔案，包含請求的詳細資訊。
-   error_log：這是 Nginx 記錄錯誤訊息的日誌檔案，幫助排查問題。

### 3. 查看 Log

使用 cat 或 tail 指令查看 Log，例如查看最近的請求日誌：

```
tail -f /var/log/nginx/access.log
```

或查看最近的錯誤日誌：

```
tail -f /var/log/nginx/error.log
```

## 過程中遇到的問題

### 1. 使用 SSH 連線時，發現請求被拒絕（Permission denied）：

-   原因：私鑰文件的權限過於寬鬆，導致 SSH 拒絕使用該密鑰進行身份驗證。

-   解決方法：更改密鑰文件的權限。
    ```
    chmod 400 "AWS EC2.pem"
    ```

### 2. 設定 Nginx Proxy 出現 502 Bad Gateway

-   原因： Nginx 配置錯誤。
-   解決方法：server_name 只需要 IP Address，不需要加上 http://，修改後重啟 Nginx 就可以了。

## 參考資料

-   [Instance Type](https://aws.amazon.com/tw/ec2/instance-types/)

-   [SSH 連線](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-to-linux-instance.html?icmpid=docs_ec2_console)
-   [安裝 Nginx、設定 Proxy、查看 log](https://learn.microsoft.com/zh-tw/troubleshoot/developer/webapps/aspnetcore/practice-troubleshoot-linux/2-2-install-nginx-configure-it-reverse-proxy)

-   [PM2](https://medium.com/jason-tech-lab/node-js系列-使用-pm2-來管理node-js-服務-3f514cf8eed9)

-   [Security Group](https://docs.aws.amazon.com/zh_tw/vpc/latest/userguide/vpc-security-groups.html)

-   ChatGPT
