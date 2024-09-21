export default class Stack {
    // # 用於定義類別的私有屬性，代表 #items 只能在內部方法中存取，無法從外部存取
    // 提供了封裝性和資料安全性，防止外部程式碼意外修改內部狀態
    #items;

    constructor() {
        this.#items = [];
    }

    // 在 stack 頂部加入元素 i
    push(i) {
        this.#items.push(i);
    }

    // 移除並回傳 stack 頂部的元素
    pop() {
        return this.#items.pop();
    }

    // 回傳 stack 頂部的元素，但不移除它
    peek() {
        return this.#items[this.#items.length - 1];
    }

    // 檢查 stack 是否為空
    isEmpty() {
        return this.#items.length === 0;
    }

    // 回傳 stack 中元素的個數
    size() {
        return this.#items.length;
    }

    // 清空 stack
    clear() {
        this.#items = [];
    }

    // 印出 stack 內容
    print() {
        console.log(this.#items.toString());
    }
}
