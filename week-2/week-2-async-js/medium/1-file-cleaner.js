const fs = require("fs");

const readData = fs.readFileSync("a.txt", "utf-8");

const newData = readData.trim();
const n = newData.length;
let str = "";

for (let i = 0; i < n; i++) {
  let word = "";
  while (i < n && newData[i] != " ") {
    word += newData[i];
    i++;
  }
  if (str.length == 0) {
    str += word;
  } else if (word != "") {
    str += " " + word;
  }
}

fs.writeFileSync("a.txt", str);

console.log(str);
