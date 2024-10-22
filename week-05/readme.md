# week-05

## 網址

https://www.miaaachen.me

## 在哪裡購買網域？

Namecheap

## DNS 的 A Record 是什麼？

A Record 是 DNS 記錄的一種，將域名解析為 IPv4 位址。當使用者在瀏覽器中輸入域名時，DNS 伺服器會查找 A Record，將該域名轉為 IP 位址，使得瀏覽器可以找到對應的伺服器。

## DNS 的 NS Record 是什麼？

NS Record (Name Server Record) 是 DNS 記錄的一種，指定哪些 DNS 伺服器負責該域名的解析。當查詢一個域名時，查詢者會先找到相關的 NS Record，然後查詢指定的 DNS 伺服器以獲取該域名的 A Record 或其他記錄。

## Domain Name vs FQDN vs URL 三者分別為何？

### Domain Name

這是使用者用來訪問網站的名稱，通常是由字母和數字組成，例如：example.com。

### FQDN (Fully Qualified Domain Name)

這是完整的域名，包括主機名和域名。例如：www.example.com 或 mail.example.com，FQDN 提供了唯一的地址，方便網路中的資源定位。

### URL (Uniform Resource Locator)

統一資源定位符是用於定位網路資源的地址，包含主機名、協議和路徑等。例如：https://www.example.com/path/to/resource。 URL 提供了訪問特定資源的完整資訊。

## 為什麼要為網站加上憑證？而不是直接使用 http 就好？

為網站加上 SSL 憑證可以確保資料安全傳輸，防止資料在傳輸過程中被竊取或竄改。使用 HTTPS 還可以增強網站的信任度和搜尋引擎排名，而直接使用 HTTP 會使網站容易受到攻擊。
