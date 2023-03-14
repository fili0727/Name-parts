"use strict";

const tekst = "peter";

const start = tekst.substring(0, 2);
const slut = tekst.substring(3, 5);
const bogstav = tekst.substring(2, 3);

const stor = bogstav.toUpperCase();

console.log(stor);
console.log(start);
console.log(slut);

const complete = start + stor + slut;
console.log(complete);
