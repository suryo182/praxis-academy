let countChar = (x, y) => {
  let counted = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === y) {
      counted += 1;
    }
  }
  return counted;
}

// let countBs = char => {
//   counted = 0;
//   for (let i = 0; i > char.length; i++) {
//     if (char[i] === "B") {
//       counted += 1;
//     }
//   }
//   return counted;
// }

function countBs(char) {
  let counted = 0;
  for (let i = 0; i < char.length; i++) {
    if (char[i] === "B") {
      counted += 1;
    }
  }
  return counted;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));