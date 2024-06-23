const brothers = ["ram", "lakhan", "rohan"];
const sisters = [
  "sangeeta",
  "shital",
  "Pooja",
  "Manjusha",
  "Kajal",
  "Dipali",
  "rohini",
];

brothers.push(sisters)

console.log(brothers);
console.log(brothers[3][1]);

const siblings = brothers.concat(sisters)
console.log(siblings);

const family = [...brothers, ...sisters];

console.log(family);

const arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const arr1 = arr.flat(Infinity);
console.log(arr1);

console.log(Array.isArray("Rohan"));
console.log(Array.from("Rohan"));
console.log(Array.from({ name: "Rohan" })); // interesting

let marks1 = 100;
let marks2 = 200;
let marks3 = 300;

console.log(Array.of(marks1, marks2, marks3));
