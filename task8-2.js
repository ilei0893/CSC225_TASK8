function swapCase(str) {
  var ln = str.length;
  var swappedString = "";

  //Utilize ASCII
  for (var i = 0; i < ln; i++) {
    if (str[i] >= "a" && str[i] <= "z")
      // lower to upper
      swappedString += String.fromCharCode(str.charCodeAt(i) - 32);
    else if (str[i] >= "A" && str[i] <= "Z")
      // upper to lower
      swappedString += String.fromCharCode(str.charCodeAt(i) + 32);
  }
  return swappedString;
}

document.body.innerHTML =
  "<h1>2. SwaP CaSe: " + swapCase("SwaP CaSe") + "</h1>";
