const fs = require("fs");

const data = fs.readFileSync("a.txt", "utf-8");

let a = 0;

for (let index = 0; index < 1000000000; index++) {
  a += index;
}

console.log(data);
