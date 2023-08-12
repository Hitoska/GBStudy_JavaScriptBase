// задание 1 ---------------------------------------------------------------------
// не совсем поняла что значит "переданное значение"
// сделала по-простому БЕЗ prompt()
function numCubing(numForCubing) {
    return numForCubing**3;
}
console.log('----- задание 1 -----');
console.log(`Сумма двух чисел возведенных в куб: ${numCubing(2)} (2^3) + ${numCubing(3)} (3^3) = ${numCubing(2) + numCubing(3)}`);

// задание 2 ---------------------------------------------------------------------
// хотела сделать со стрелочной функцией, но хз как поставить "толстую стрелку"
// в гугле не нашла информацию. Мб нужно поставить плагин какой?
function isThisNumber(numSalary) {
    return typeof numSalary === 'number' && !isNaN(numSalary);
}
function salaryWithoutTax(numSalary) {
    const pureSalary = numSalary * 0.87;
    console.log(`Размер заработной платы за вычетом налогов: ${pureSalary}`);
}
const numSalary = Number(prompt('Задание 2. Введите число (размер заработной платы)'));
// Если вводимое значение НЕ число - повторить ввод
if (isThisNumber(numSalary) != true) {
    alert('Значение задано неверно!');
    location. reload();
}
console.log('----- задание 2 -----');
salaryWithoutTax(numSalary);

// задание 3 ---------------------------------------------------------------------
function foundMaxNumber(numFirst, numSecond, numThird) {
    console.log(`Вы ввели числа: ${numFirst}, ${numSecond}, ${numThird}`)
    return Math.max(numFirst, numSecond, numThird);
}
console.log('----- задание 3 -----');
let maxNumber = foundMaxNumber(Number(prompt('Задание 3. Введите первое число')), 
                               Number(prompt('Задание 3. Введите второе число')), 
                               Number(prompt('Задание 3. Введите третье число')));
console.log(`Наибольшее число из введенных: ${maxNumber}`);

// задание 4 ---------------------------------------------------------------------
function numAddition(numFirst, numSecond) {
    return numFirst + numSecond;
}
function numSubtraction(numFirst, numSecond) {
    if (numFirst > numSecond) {
        return numFirst - numSecond;
    } else {
        return numSecond - numFirst;
    }
}
function numMultiplication(numFirst, numSecond) {
    return numFirst * numSecond;
}
function numDivision(numFirst, numSecond) {
    return numFirst / numSecond;
}
// решила числа запрашивать у пользователя
let numFirst = Number(prompt('Задание 4. Введите первое число'));
let numSecond = Number(prompt('Задание 4. Введите второе число'));

console.log('----- задание 4 -----');
console.log(`Результат сложения чисел: ${numAddition(numFirst, numSecond)}`);
console.log(`Результат разности чисел: ${numSubtraction(numFirst, numSecond)}`);
console.log(`Результат умножения чисел: ${numMultiplication(numFirst, numSecond)}`);
console.log(`Результат деления чисел: ${numDivision(numFirst, numSecond)}`);
