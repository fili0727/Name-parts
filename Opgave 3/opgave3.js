"use strict";

function writeCapitalized(name) {
  const start = name.substring(0, 1).toLocaleUpperCase();
  const slut = name.substring(1).toLocaleLowerCase();

  const complete = start + slut;
  console.log(complete);
}
writeCapitalized("peTER");

function capitalized(name) {
  const start = name.substring(0, 1).toLocaleUpperCase();
  const slut = name.substring(1).toLocaleLowerCase();
  return start + slut;
}
console.log(capitalized("pETer"));
