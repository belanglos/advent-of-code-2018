const text = document.querySelector("pre").innerText;
const ids = text.split("\n").filter(id => id);

const availableChars = ids.reduce(
  (accumulator, currentValue, currentIndex, array) => {
    currentValue.split("").forEach(char => {
      if (!accumulator.includes(char)) {
        accumulator.push(char);
      }
    });
    return accumulator;
  },
  []
);

let two = 0;
let three = 0;
ids.forEach(id => {
  let hasTwo = 0;
  let hasThree = 0;
  const chars = id.split("");
  availableChars.forEach(aChar => {
    if (chars.filter(char => char === aChar).length === 2) {
      hasTwo = 1;
    } else if (chars.filter(char => char === aChar).length === 3) {
      hasThree = 1;
    }
  });
  two += hasTwo;
  three += hasThree;
});

const result = two * three;

// Part 2

for (let i = 0; i < ids.length; i++) {
  const idArr = ids[i].split("");
  for (let j = i + 1; j < ids.length; j++) {
    const compareIDArr = ids[j].split("");
    let common = "";
    for (let k = 0; k < idArr.length; k++) {
      if (idArr[k] === compareIDArr[k]) {
        common += idArr[k];
      }
    }
    if (common.length === idArr.length - 1) {
      console.log(`Found answer ${common}.`);
    }
  }
}
