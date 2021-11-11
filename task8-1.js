function reverseThisString(str) {
  //Guard clause
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Not valid";
  }

  const reversedArray = [];
  const length = str.length - 1;

  // Looping from the end
  for (let i = length; i >= 0; i--) {
    reversedArray.push(str[i]);
  }

  // concatenate
  return reversedArray.join("");
}

document.body.innerHTML =
  "<h1>1. This string reversed is: " +
  reverseThisString("This string reversed is") +
  "</h1>";
