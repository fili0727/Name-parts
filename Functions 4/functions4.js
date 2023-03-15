"use strict";

function greeting(firstName) {
  return `Hello ${firstName}`;
}

greeting("Filippa");

const result = greeting("Filippa");
console.log(result);

console.log(greeting("tobis"));

const txt = `greetings is ${greeting("bob")}`;

console.log(txt);

console.log(greeting());
