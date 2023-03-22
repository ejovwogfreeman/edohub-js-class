let form = document.getElementById("form");
let input = document.getElementById("input");
let word = document.getElementById("word");

let wordNum = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
};

function convertNumberToWords(number) {
  if (number in wordNum) {
    return wordNum[number];
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  word.textContent = convertNumberToWords(input.value);
  input.value = "";
});
