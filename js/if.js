/*let country = prompt("Введите страну");

if (country === null) {
  console.log("Вы нчего не ввели");
} else {
  let uppercaseCountry = country.toLocaleUpperCase();

  console.log(uppercaseCountry);
}

let string = prompt("Введите слово");

if (string.length === 5) {
  console.log("Ты молодец");
} else {
  console.log("Число символов не равно 5");
}
*/
// ---------

// Вылюты разных стран
// Пользователь вводит страну
// Если страна - Россия, то надо вывести "рубли"
// Eсли страна - USA, то надо вывести "dollars"
// в противном случае - вывести "Неизвестная валюта"

const country = prompt("Введите страну");

if (country === "Russia") {
  console.log("рубли");
} else if (country === "USA") {
  console.log("dollars");
} else {
  console.log("неизвестная валюта");
}
