// задание 1
let num1 = prompt('Задание 1. Введите первое число');
let num2 = prompt('Задание 1. Веддите второе число');

if (num1 <= 1 && num2 >= 3) {
    alert(`Все верно! 
       num1 = ${num1} <= 1 
    и num2 = ${num2} >= 3`);
}
else {
    alert(`Условия не выполнены! Повторите ввод!
Подсказка: первое число <= 1 и второе число > =3`);
    location. reload();
}

// задание 2
alert(`Задание 2. Выполение смотрите в логах.
Сам переписанный оператор: 
let test = true === true ? console.log('+++') : console.log('---');`);
let test = true === true ? console.log('+++') : console.log('---');

// задание 3
let day = prompt('Задание 3. Введите дату месяца от 1 31');
if (day >= 1 && day <= 10) {
    alert(`${day} число - это первая декада месяца`);
}
else if (day > 10 && day <= 20) {
    alert(`${day} число - это вторая декада месяца`);
}
else if (day > 20 && day <= 31) {
    alert(`${day} число - это третья декада месяца`)
}
else {
    alert(`Некорректно число! Повторите ввод`)
    location. reload();
}

// задание 4
let num4 = prompt('Задание 4. Введите число (1-999) для вывода его разрядов');
if (num4 >= 1 && num4 <= 999) {
    let uni = num4 % 10; // числа
    let ex = num4;
    ex = ex / 10;
    let tens = ex % 10; // десятки
    ex = ex / 10;
    let hundr = ex % 10; // сотни
    alert(`Число ${num4} содержит:
    ${Math.trunc(uni)} - единиц
    ${Math.trunc(tens)} - десятков
    ${Math.trunc(hundr)} - сотен`);
} 
else {
    alert(`Некорректно число! Повторите ввод`)
    location. reload();
}
alert(`Спасибо за внимание!`)

