/* 	1. Введите букву
	2. Сказать,гласная это или согласная
Если ввели цифру,то выдать "это символ,а не буква" */

let word = prompt("Введите букву");
let vowel = "aeyuio";
let consonant = "q w r t p s d f g h j k l z x c v b n m ";
if (vowel.includes(word)) {
  console.log("This is Vowel");
} else if (consonant.includes(word)) {
  console.log("This is Consonant");
} else {
  console.log("This is not a Letter");
}
