const fs = require("fs");

function countWords(file) {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const words = data.split(/\s+/).length;
      console.log(`${words} words`);
    }
  });
}

function countLines(file) {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const lines = data.split("\n").length;
      console.log(`${lines} lines`);
    }
  });
}

module.exports = {
  countWords,
  countLines,
};
