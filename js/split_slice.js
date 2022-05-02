/*Задача 3: Пользователь вводит строку
 * Далее он вводит два числа через пробел (начало нового слова и конец)
 * Нужно вывести кусок исходной строки (вырезать)
 *
 * Пример: строка "string", два числа - 2 4, нужно вывести rin (метод split,Number()- преобразование одного типа к другому,slice)
 */

const string = prompt('Enter something here');
const position = prompt ('Enter two numbers with whitespace');

const new_massive = (position.split (' '));
console.log (new_massive);
console.log (string.slice(Number (new_massive[0]),Number (new_massive[1]) ));