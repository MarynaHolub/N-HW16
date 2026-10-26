// Напишите функцию `greetUser`, которая принимает имя пользователя (строка) и выводит приветственное сообщение в консоль: `"Привет, <name>!"`. Используйте строгую типизацию.
function greetUser(name: string): void {
  console.log(`Hello ${name}!`);
}

greetUser('Maryna');

// Создайте интерфейс `Person`, который описывает человека с полями `name`, `age`, и `city`.
// Напишите функцию `printPersonInfo`, которая принимает объект типа `Person` и выводит информацию о человеке в формате: `"Имя: <name>, Возраст: <age>, Город: <city>"`.

interface Person {
  name: string;
  age: number;
  city: string;
}

const person = {
  name: 'Ivan',
  age: 28,
  city: 'Muelheim',
};

function printPersonInfo(person: Person): void {
  console.log(`Name: ${person.name}, age: ${person.age}, city: ${person.city}`);
}

printPersonInfo(person);

// Напишите функцию `squareNumber`, которая принимает число и возвращает его квадрат. Используйте строгую типизацию.

function squareNumber(num: number): number {
  return num * num;
}

console.log(squareNumber(7));

// Напишите функцию `isEven`, которая принимает число и возвращает `true`, если число четное, и `false`, если нечетное. Используйте строгую типизацию.

function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(7));
console.log(isEven(10));

// Создайте интерфейс `Student`, который описывает студента с полями `name` (строка) и `grade` (число).
// Напишите функцию `printStudentInfo`, которая принимает объект типа `Student` и выводит информацию о студенте в формате: `"Студент: <name>, Оценка: <grade>"`.

interface Student {
  name: string;
  grade: number;
}

const student = {
  name: 'Darina',
  grade: 2,
};

function printStudentInfo(student: Student): void {
  console.log(`Student ${student.name} has grade ${student.grade}`);
}

printStudentInfo(student);

// Напишите функцию `logMessage`, которая принимает строку и выводит её в консоль без возвращаемого значения. Используйте тип `void`.

function logMessage(text: string): void {
  console.log(`${text}`);
}

logMessage('flower');
