const name = "rohan";
const repoCount = 15;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("rvk-0148");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("0"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-1, -3);
console.log(anotherString);

const newStringOne = "   rk    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://youtube.com/%20chaiaurcode";

console.log(url.replace("%20", ""));

console.log(url.includes("youtube"));

console.log(gameName.split("-"));
