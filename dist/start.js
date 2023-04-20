"use strict";
console.log(Math.round(Math.random() * 300));
let myName = "soliman";
const sum = (num1, num2) => {
    return num1 + num2;
};
console.log(typeof myName);
console.log(typeof sum(1, 3));
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, "ko"];
let MultiDimensionalArray = [
    1,
    3,
    "A",
    "B",
    ["D", "E"],
];
const sumWithSpreadOperator = (...nums) => {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
};
console.log(sumWithSpreadOperator(1, 2, 3, 4, 5, 6));
//# sourceMappingURL=start.js.map