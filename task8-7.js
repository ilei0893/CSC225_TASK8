function fizzBuzz(start, end) {
  for (let i = start; i < end + 1; i++) {
    if (i % 15 == 0) console.log("CSC225 RULES I LOVE JAVASCRIPT");
    else if (i % 3 == 0) console.log("CSC225 RULES");
    else if (i % 5 == 0) console.log("I LOVE JAVASCRIPT");
    else console.log(i);
  }
  return "The answer is in the console!";
}

document.body.innerHTML = "<h1>" + fizzBuzz(1, 100) + "</h1>";
