"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const work_1 = require("./work");
let employeeData = new work_1.Employee(1, 'IT', 'krgs');
console.log(employeeData);
console.log(employeeData.exams());
console.log(employeeData.getUsers());
console.log(employeeData.myName('VijayaKumari'));
console.log('my branch is ', employeeData.myBranch());
//# sourceMappingURL=index.js.map