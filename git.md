# git.md

## 說明 blob, tree, commit, branch, head 分別是什麼

* **blob**: 用來儲存檔案內容的單位。它不會儲存檔案名稱或目錄結構，只會記錄檔案的純內容。因此，同樣內容的文件無論名稱或位置如何，都只會存儲為一個 blob。
* **tree**: 用來描述目錄結構的物件。它記錄了目錄下的所有文件和子目錄。每個 tree 物件會指向其包含的 blob 和其他 tree，並包含文件的名稱、類型和權限等資訊。
* **commit**: 它代表了一次提交的版本狀態。每個 commit 物件都會包含一個指向 tree 物件的指標，作者資訊、提交訊息和指向前一次提交的指標（parent commit）。
* **branch**: 每個分支名稱代表了一條發展路徑，例如 main 或 feature-x。每次進行新的提交時，該分支的指標會更新為新的 commit。
* **head**: HEAD 是指向當前所在分支的指標。它代表了當前的 commit，通常指向一個 branch。當切換一個分支或 commit 時，HEAD 會隨之更新。

## 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化

1. **初始化repo** (git init): .git資料夾被創建，包含基本的配置檔案、空的 objects 和 refs 資料夾等。
2. **新增文件** (git add): 執行 git add 時，Git 會將檔案的快照以 blob 的形式儲存在 .git/objects 資料夾中。
3. **進行commit** (git commit -m "message"): 在提交時，Git 會創建一個新的 tree 物件和一個 commit 物件，這些物件會被儲存在 .git/objects 資料夾中。
4. **建立新分支** (git branch branch-name): 新的分支只是 .git/refs/heads/ 資料夾中新增加的一個檔案，它記錄了該分支指向的提交hash值。
5. **切換分支** (git checkout branch-name): HEAD 會被更新以指向新的分支或 commit。

## commit message 應該怎麼寫比較好？應該有什麼 style 嗎？

commit message 應該清晰且簡潔地描述此次變更的內容和目的，通常遵循以下風格：

1. 使用祈使語氣：如 “Fix bug in user login” 而不是 “Fixed bug in user login”。
2. 提供變更的理由和背景資訊：說明為什麼做這次更改和這次更改的影響。
3. 避免不明確的描述，例如 “Update”, “Modify”，取而代之使用更具體的語言。
4. 確保每次提交是原子性的，即每個提交只解決一個問題或增加一個功能。

常見的Type有以下種類：
* feat: 對專案做了哪些新增、修改 (Feature)。
* fix: 修復了那些功能 (Bug Fix)。
* docs: 對專案撰寫文件 (Documentation)。
* refactor: 重構 (既不是新增功能，也不是修補 bug 的程式碼變動)。
