/* Задача 2: Пользователь вводит строку
 * Далее он вводит подстроку (слово), которое надо удалить из этой строки
 * Если этой подстроки нет, то вывести сообщение об этом
 * Иначе - удалить и вывести то, что получилось. (не использовать replace, a splice)
 *
 * 
1 способ: 
const message = prompt("введите любое предложение");
const message1 = prompt(" введите подстроку,которую надо удалить в строке");
console.log (message.replace (message1, ""));
*/
const message = prompt("введите любое предложение");
const message1 = prompt(" введите подстроку,которую надо удалить в строке");

console.log(
  message.slice(0, message.indexOf(message1)) +
    message.slice(message1.length + message.indexOf(message1))
);
