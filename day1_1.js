const text = document.querySelector("pre").innerText;
const numbers = text
  .split("\n")
  .filter(number => number)
  .map(number => parseFloat(number));

const result = numbers.reduce(
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  },
  0
);

// Part 2

let frequencies = [];
let i = 0;
let accumulator = 0;
while (true) {
  accumulator += numbers[i % numbers.length];

  if (frequencies.includes(accumulator)) {
    console.log(`Found frequency ${accumulator} twice.`);
    break;
  } else {
    frequencies.push(accumulator);
  }
  i++;
}
