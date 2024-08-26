const { Command } = require("commander");
const program = new Command();
const count = require("./count.js");

program
  .name("count")
  .description("CLI to count words or lines in a file")
  .version("0.8.0");

program
  .command("count-words")
  .description("Count number of words in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    count.countWords(file);
  });

program
  .command("count-lines")
  .description("Count number of lines in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    count.countLines(file);
  });

program.parse();
