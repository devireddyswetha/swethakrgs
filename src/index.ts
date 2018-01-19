


import { Employee } from './work';

let employeeData = new Employee(1,'IT','krgs');

console.log(employeeData);
console.log(employeeData.exams());
console.log(employeeData.getUsers());

console.log(employeeData.myName('VijayaKumari'));

console.log('my branch is ', employeeData.myBranch());