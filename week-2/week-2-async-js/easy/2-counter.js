let counter = 1;

function incrementCounter() {
  console.log(counter);
  counter++;
  setTimeout(incrementCounter, 1000);
}

incrementCounter();
