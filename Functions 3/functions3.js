"use strict";
const parm = "første værdi";
console.log(parm);

function myFunc(parm) {
  console.log(parm);
  parm = "en ny værdi";
  console.log(parm);
}

myFunc(parm);
console.log(parm);
