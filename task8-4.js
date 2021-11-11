function passOrFail(arr) {
  const boolArr = arr.map((bool) => (bool >= 75 ? true : false));
  return boolArr;
}

document.body.innerHTML =
  "<h1>4. Number Array: 20, 30, 50, 80, 90, 100 </h1>" +
  "<h1>Boolean Array: " +
  passOrFail([20, 30, 50, 80, 90, 100]) +
  "</h1>";
