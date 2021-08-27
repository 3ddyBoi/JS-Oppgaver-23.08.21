//Oppgave 11
console.log("Oppgave 11");
const handleSum = (sum1, sum2) => {
  return sum1 + sum2;
};

// Oppgave 1
console.log("Oppgave 1");
let myNumber = handleSum(5, 10);
console.log(myNumber);

// Oppgave 2
console.log("Oppgave 2");
let myArray = [1, 2, 3, 4, 5];
console.log(myArray);

// Oppgave 3
console.log("Oppgave 3");
let myString = `Min array inneholder dette: ${myArray}`;

// Oppgave 5
console.log("Oppgave 5");
console.log("Hello World!");

// Oppgave 6
console.log("Oppgave 6");
console.log(myString);

// Oppgave 7
// ##

// Oppgave 8
console.log("Oppgave 8");
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

myArray.forEach((item) => console.log(item));

// Oppgave 9 & 10
console.log("Oppgave 9 & 10");
if (myNumber != 0) {
  console.log("Number does not equal 0");
} else {
  console.log("Number is equal 0");
}

// Oppgave 12
console.log("Oppgave 12");
const handleAreal = (num1, num2) => {
  return num1 * num2;
};
console.log(handleAreal(10, 5));

// Oppgave 13
console.log("Oppgave 13");
const handleVolumeSphere = (r) => {
  return `Volum Sphære: ${(4 / 3) * Math.PI * Math.pow(r, 3)}`;
};
console.log(handleVolumeSphere(3));

// Oppgave 14
console.log("Oppgave 14");
const handleDiameterCircle = (r) => {
  return `Diameter Sirkel: ${2 * r}`;
};
console.log(handleDiameterCircle(5));

// Oppgave 15
console.log("Oppgave 15");
const handleCircumferenceCircle = (r) => {
  return `Omkrets Sirkel: ${2 * Math.PI * r}`;
};
console.log(handleCircumferenceCircle(14));

// Oppgave 16
console.log("Oppgave 16");
const handleAreaCircle = (r) => {
  return `Areal Sirkel: ${Math.PI * Math.pow(r, 2)}`;
};
console.log(handleAreaCircle(5));

// Oppgave 17
console.log("Oppgave 17");
const CheckNum = (num) => {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negetive");
  } else {
    console.log("Number is 0");
  }
};
CheckNum(5);

// Oppgave 18
console.log("Oppgave 18");
