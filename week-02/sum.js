function sum(ary) {
    let total = 0;
    ary.forEach((element) => {
        total += element;
    });
    return total;
}

console.log(sum([1, 5, 3, 2]));

// 共有3種寫法：1. 數學公式 2. 遞迴 3. Array函式

/* 如果 sum 函式的 input 是 n，要回傳 1 + 2 + 3 + ... + n

1. 數學公式
function sum(n) {
    return (n * (n + 1)) / 2;
}

2. 遞迴
function sum(n) {
    if (n <= 1) return n;
    return n + sum(n - 1);
}

3. Array 函式
function sum(n) {
    return Array.from({ length: n }, (v, i) => i + 1).reduce(
        (acc, cur) => acc + cur, 0
    );
}
*/
