"use strict";

function writeNameParts(fullName) {
  const firstSpace = fullName.indexOf(" ");

  const lastSpace = fullName.lastIndexOf(" ");

  const myMiddleName = fullName.substring(firstSpace + 1, lastSpace);

  const myFirstName = fullName.substring(0, firstSpace);

  const myLastName = fullName.substring(lastSpace + 1);

  const capFirstName =
    myFirstName[0].toUpperCase() + myFirstName.substring(1).toLowerCase();

  const capMiddleName =
    myMiddleName[0].toUpperCase() + myMiddleName.substring(1).toLowerCase();

  const capLastName =
    myLastName[0].toUpperCase() + myLastName.substring(1).toLowerCase();

  if (myMiddleName) {
    return `first name:${capFirstName}
  middle name: ${capMiddleName}
  last name: ${capLastName}`;
  } else {
    return `first name:${capFirstName}
  last name: ${capLastName}`;
  }
}

console.log(writeNameParts("peTeR heRoNiMoUs lINd"));
