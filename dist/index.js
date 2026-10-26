"use strict";
// Напишите функцию `greetUser`, которая принимает имя пользователя (строка) и выводит приветственное сообщение в консоль: `"Привет, <name>!"`. Используйте строгую типизацию.
function greetUser(name) {
    console.log(`Hello ${name}!`);
}
greetUser('Maryna');
const person = {
    name: 'Ivan',
    age: 28,
    city: 'Muelheim',
};
function printPersonInfo(person) {
    console.log(`Name: ${person.name}, age: ${person.age}, city: ${person.city}`);
}
printPersonInfo(person);
// Напишите функцию `squareNumber`, которая принимает число и возвращает его квадрат. Используйте строгую типизацию.
function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(7));
// Напишите функцию `isEven`, которая принимает число и возвращает `true`, если число четное, и `false`, если нечетное. Используйте строгую типизацию.
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(7));
console.log(isEven(10));
const student = {
    name: 'Darina',
    grade: 2,
};
function printStudentInfo(student) {
    console.log(`Student ${student.name} has grade ${student.grade}`);
}
printStudentInfo(student);
// Напишите функцию `logMessage`, которая принимает строку и выводит её в консоль без возвращаемого значения. Используйте тип `void`.
function logMessage(text) {
    console.log(`${text}`);
}
logMessage('flower');
//# sourceMappingURL=index.js.map