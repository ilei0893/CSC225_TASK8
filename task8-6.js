function returnPrimeNumbers(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.body.innerHTML =
  "<h1>6. Original Array: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 </h1>" +
  "<h1> Prime Array: " +
  array.filter(returnPrimeNumbers) +
  "</h1> ";
