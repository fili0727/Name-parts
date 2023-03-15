"use strict";

function writeFullName(lastName, firstName, middleName) {
  if (middleName) {
    console.log(`Hello ${firstName} ${middleName} ${lastName}`);
  } else {
    console.log(`Hello ${firstName} ${lastName}`);
  }
}
writeFullName("Lind", "Peter", "Heronimous");

function getFullName(lastName, firstName, middleName) {
  if (middleName) {
    return `${firstName} ${middleName} ${lastName}`;
  } else {
    return `${firstName} ${lastName}`;
  }
}
console.log(getFullName("Lind", "Peter", "Heronimous"));
