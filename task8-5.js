function germanNumbers(cardinalNumbers, germanNums) {
  let combinedArr = [];
  for (let i = 0; i < cardinalNumbers.length && germanNums.length; i++) {
    combinedArr.push(" " + cardinalNumbers[i] + " is " + germanNums[i]);
  }
  return combinedArr;
}

document.body.innerHTML =
  "<h1>5. Cardinal: " +
  [2, 3, 4, 5, 6] +
  "</h1>" +
  "<h1> German: " +
  ["zwei", "drei", "vier", "fünf", "sechs"] +
  "</h1>" +
  "Returned: " +
  germanNumbers([2, 3, 4, 5, 6], ["zwei", "drei", "vier", "fünf", "sechs"]) +
  "</h1>";
