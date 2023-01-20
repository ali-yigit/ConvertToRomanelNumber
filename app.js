function convertToRoman(num) {
  let roman = "";
  const romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for (let i = 0; i < numbers.length; i++) {
    while (num >= numbers[i]) {
      roman += romanNumeral[i];
      num -= numbers[i];
    }
  }
  return roman;
}

function displayRomanNumeral() {
  const input = document.querySelector("#number").value;
  const result = document.querySelector("#result");
  // result.textContent = convertToRoman(input);
  result.innerText = convertToRoman(input);
}
