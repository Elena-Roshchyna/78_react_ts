
// Протипизировать следующие данные:

// Примитивные типы
let age= 25;
let age: number = 25;


let name = "Alice";
let name: string = "Alice"



let isActive = true;
let isActive: boolean = true;

// Тип Union для переменной, которая может быть строкой или null

let nullableValue = null; // Строка или null
let nullableValue: string | null = null;


// Массивы одного типа

let numbers = [1, 2, 3, 4];
let numbers: number[] = [1, 2, 3, 4];


let names = ["Alice", "Bob", "Charlie"];
let names: string[] = ["Alice", "Bob", "Charlie"];


// Массивы со смешанными типами (Union types)
let mixed = [1, "Alice", 2, "Bob"];
let mixed: (number | string)[] = [1, "Alice", 2, "Bob"];


let colors = [123, "red", true, "blue"];
let colors: (number | string | boolean)[] = [123, "red", true, "blue"];



// Стрелочные функции (типизируем параметры и возвращаемое значение)
const add = (a, b) => {
return a - b;
};

const add = (a: number, b: number): => {
    return a - b;
};



// Функция ничего не возвращает, поэтому тип возвращаемого значение - void
const logMessage = (message) => {
console.log(message);
};


const logMessage = (message: string): void => {
    console.log(message);
};


const arrayUsers = [
{ id: 1, name: "Tom" },
{ id: 2, name: "Alex" },
{ id: 3, name: "Mary" },
];


const arrayUsers: User[] = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Mary" },
];



