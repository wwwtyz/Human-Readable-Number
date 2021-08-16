module.exports = function toReadable (number) {

let digits = number.toString().split('');
let realDigits = digits.map(Number);
let result = '';
const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const tens =['', "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  let readable = (number >= 0 && number < 20) ? result = (words[number]) :
  (number >= 20 && number < 100 && number % 10 === 0) ? result = (tens[realDigits[0]]) :
  (number >= 20 && number < 100) ? result = (tens[realDigits[0]] + ' ' + words[realDigits[1]]) :
  (number > 100 && number < 110 || number > 200 && number < 210 || number > 300 && number < 310 || number > 400 && number < 410 || number > 500 && number < 510 ||
    number > 600 && number < 610 || number > 700 && number < 710 || number > 800 && number < 810 || number > 900 && number < 910) ?
    result = (words[realDigits[0]] + ' hundred ' + words[realDigits[2]]) :
  (number > 110 && number < 120 || number > 210 && number < 220 || number > 310 && number < 320 || number > 410 && number < 420 || number > 510 && number < 520 ||
    number > 610 && number < 620 || number > 710 && number < 720 || number > 810 && number < 820 || number > 910 && number < 920) ?
    result = (words[realDigits[0]] + ' hundred ' + words[realDigits[2]+10]) :
  (number >= 100 && number < 1000  && number % 100 === 0) ? result = (words[realDigits[0]] + ' hundred') :
  (number >= 120 && number < 1000  && number % 10 === 0) ? result = (words[realDigits[0]] + ' hundred ' + tens[realDigits[1]]) :
  (number >= 120 && number < 1000) ? result = (words[realDigits[0]] + ' hundred ' + tens[realDigits[1]] + ' ' + words[realDigits[2]]) :
  result = 'one hundred ten'
  return result;
}
