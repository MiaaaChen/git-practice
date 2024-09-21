import Stack from "./stack.js";

let stack = new Stack();
stack.print();

stack.push(5);
stack.push(8);
stack.print();

// 為了驗證 stack 開發沒問題，應該要進行全面測試，包含所有方法和可能的情況

stack.clear();
stack.push(1);
stack.push(2);
console.log(stack.peek()); // 2
stack.pop();
stack.push(3);
stack.push(4);
console.log(stack.size()); // 3
console.log(stack.pop()); // 4
stack.pop();
stack.pop();
console.log(stack.isEmpty()); // true
