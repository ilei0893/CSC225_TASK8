function toCelcius(arr) {
  const celsiusArr = arr.map((temperature) => (temperature - 32) * (5 / 9));
  return celsiusArr;
}

document.body.innerHTML =
  "<h1>3. Farenheit: 23, 32, 41, 50, 59 </h1> " +
  "<h1> Celsius: " +
  toCelcius([23, 32, 41, 50, 59]) +
  "</h1>";
