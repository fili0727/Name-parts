"use strict";

const tekst = "fILiPpa";

const start = tekst.substring(0, 1).toLocaleUpperCase();
const slut = tekst.substring(1).toLocaleLowerCase();

console.log(start);
console.log(slut);

const complete = start + slut;
console.log(complete);
