"use strict";

const tekst = "Filippa Repholtz Arildsen";

let slut = tekst.length;

const firstSpace = tekst.indexOf(" ");

const lastSpace = tekst.lastIndexOf(" ");

const myMiddleName = tekst.substring(firstSpace + 1, lastSpace);

const myFirstName = tekst.substring(0, firstSpace);

const myLastName = tekst.substring(lastSpace + 1);

console.log(`#${myFirstName}#`);
console.log(`#${myMiddleName}#`);
console.log(`#${myLastName}#`);
