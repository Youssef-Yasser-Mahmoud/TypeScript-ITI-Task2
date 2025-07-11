"use strict";
// 0- difference between  Type Assertions & Type Guards
//  Type Assertions
let value1 = 'hi';
let strLength = value1.length;
console.log(value1, strLength);
// Type Guards
function checkType(value2) {
    if (typeof value2 === 'string') {
        console.log(value2.toUpperCase());
    }
    else if (typeof value2 === 'number') {
        console.log(value2.toFixed(2));
    }
}
checkType('hi');
checkType(1);
/* 1- Create a class BankAccount with:
A private property balance (number).
A public method deposit that adds to the balance.
A public method getBalance that returns the balance.
Test the class by depositing some money and retrieving the balance. */
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(newBalance) {
        this.balance += newBalance;
    }
    getBalance() {
        return this.balance;
    }
}
let account1 = new BankAccount(10000);
account1.deposit(200);
console.log(account1.getBalance());
/* 2- Create a class Animal with:
A protected property name (string).
A protected method makeSound that logs a sound.
Create a subclass Dog that extends Animal and overrides the makeSound method to log "Woof!".
Test the Dog class. */
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return 'sound';
    }
}
class Dog extends Animal {
    makeSound() {
        return `Woof Woof!!`;
    }
}
let d1 = new Dog('Dog Name');
console.log(d1.makeSound());
/* 3- Create a class Person with:
A readonly property id (number).
A constructor that initializes id.
Try to modify the id property after initialization and observe the error. */
class Person {
    constructor(id) {
        this.id = id;
    }
}
let p1 = new Person(10);
// p1.id = 20; // Error
/* 4- Refactor the Person class to use parameter properties for name (string) and age (number) in the constructor. */
class Person1 {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
/* 5- Create a class MathUtils with:
A static property PI (number) set to 3.14.
A static method calculateCircumference that takes a radius (number) and returns the circumference (2 * PI * radius).
Test the static method. */
class MathUtils {
    static calculateCircumference(r) {
        return 2 * r * MathUtils.PI;
    }
}
MathUtils.PI = 3.14;
console.log(MathUtils.calculateCircumference(1));
/* 6- Create an abstract class Shape with:
An abstract method calculateArea that returns a number.
Create a subclass Circle that implements calculateArea using the formula PI * radius^2.
Test the Circle class. */
class Shape {
}
class Circle extends Shape {
    calculateArea(r) {
        return Math.PI * r ** 2;
    }
}
let c1 = new Circle();
console.log(c1.calculateArea(10));
/* 7- Create a class Temperature with:
A private property _celsius (number).
A getter celsius that returns _celsius.
A setter celsius that sets _celsius but throws an error if the value is below -273.15 (absolute zero).
Test the getter and setter. */
class Temperature {
    constructor() {
        this._celsius = 0;
    }
    getCelsius() {
        return this._celsius;
    }
    setCelsius(newValue) {
        if (newValue < -273.15) {
            throw new Error("Can't be Lower than -273.15");
        }
        this._celsius = newValue;
    }
}
let t1 = new Temperature();
console.log(t1.getCelsius());
// t1.setCelsius(-300); // Error
/* 8- Create a class Employee with:
A readonly property id (number).
A private property salary (number).
A protected property department (string).
A constructor that initializes all properties using parameter properties.
A public method getDetails that returns a string with all details.
Create a subclass Manager that extends Employee and adds a private property teamSize (number). Override getDetails to include teamSize.
Test the Manager class. */
class Employee {
    constructor(id, salary, department) {
        this.id = id;
        this.salary = salary;
        this.department = department;
        this.id = id;
        this.salary = salary;
        this.department = department;
    }
    getDetails() {
        return `id is: ${this.id}, salary is: ${this.salary}, department is: ${this.department}`;
    }
}
class Manager extends Employee {
    constructor(id, salary, department, teamSize) {
        super(id, salary, department);
        this.teamSize = teamSize;
        this.teamSize = teamSize;
    }
    getDetails() {
        return `${super.getDetails()}, teamSize is: ${this.teamSize}`;
    }
}
let manager1 = new Manager(10, 10000, 'DP1', 5);
console.log(manager1.getDetails());
/* 9- Create a generic class Box that can store any type of value. Add methods:
setValue to set the value.
getValue to get the value.
Test the class with different types (e.g., string, number). */
class Box {
    constructor(value) {
        this.value = value;
        this.value = value;
    }
    setValue(newValue) {
        this.value = newValue;
    }
    getValue() {
        return this.value;
    }
}
let b1 = new Box('string');
b1.setValue('newString');
console.log(b1.getValue());
let b2 = new Box(1);
b2.setValue(2);
console.log(b2.getValue());
/* 10- Write a generic function identity that takes an argument of any type and returns the same value. Test it with a number, string, and boolean. */
function identity(value) {
    return value;
}
console.log(identity(1));
console.log(identity('asd'));
/* 11- Write a generic function printLength that takes an argument with a length property (e.g., string, array) and prints its length.
Use a constraint to ensure the argument has a length property. */
function printLength(value) {
    return value.length;
}
// console.log(printLength(1)) // error because of number doesn't have length property
console.log(printLength('someValue'));
