/**
 * ternary if
 * syntax:
 * 
 * const a = <some_condition> ? <value_if_condition_is_true> : <value_in_another_case>;
 * 
 * Задача:
 * Есть деньги. Если денег больше 100, то надо вывести "много",
 * а иначе "мало"
 */

const money = 45;
const resultWord = money > 100 ? "много" : "мало";

console.log(resultWord)