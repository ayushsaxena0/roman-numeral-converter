document
  .querySelector("#convert-btn")
  .addEventListener("click", convertToRoman);

function convertToRoman() {
  let input = document.querySelector("#number").value;
  const p = document.querySelector("#output");
  let result = "";

  p.classList.remove("error", "result");

  if (!input) {
    p.classList.add("error");
    result = "Please enter a valid number";
  } else if (input < 1) {
    p.classList.add("error");
    result = "Please enter a number greater than or equal to 1";
  } else if (input > 3999) {
    p.classList.add("error");
    result = "Please enter a number less than or equal to 3999";
  } else {
    const romanNumeral = [
      { sym: "M", val: 1000 },
      { sym: "CM", val: 900 },
      { sym: "D", val: 500 },
      { sym: "CD", val: 400 },
      { sym: "C", val: 100 },
      { sym: "XC", val: 90 },
      { sym: "L", val: 50 },
      { sym: "XL", val: 40 },
      { sym: "X", val: 10 },
      { sym: "IX", val: 9 },
      { sym: "V", val: 5 },
      { sym: "IV", val: 4 },
      { sym: "I", val: 1 },
    ];

    romanNumeral.forEach((el) => {
      let { sym, val } = el;
      while (input >= val) {
        result += sym;
        input = input - val;
      }
    });
    p.classList.remove("error");
    p.classList.add("result");
  }
  p.innerText = result;
}
