// задание 1 ---------------------------------------------------------------------
console.log('----- задание 1 -----');
for (let i = 0; i < 12; i++) {
    if (i === 0)               console.log(`${i} - это ноль`);
    if (i % 2 === 0 && i > 0)  console.log(`${i} - четное число`);
    if (i % 2 != 0)            console.log(`${i} - нечетное число`);
}

// задание 2 ---------------------------------------------------------------------
console.log('----- задание 2 -----');
const arrayTaskTwo = [1, 2, 3, 4, 5, 6, 7];
console.log(`Массив до удаления: ${arrayTaskTwo}`); // [1, 2, 3, 4, 5, 6, 7]
arrayTaskTwo.splice(3, 2); // начиная с индекса 3, удалить 2 элемента
console.log(`Массив после удаления: ${arrayTaskTwo}`); // [1, 2, 3, 6, 7]

// задание 3 ---------------------------------------------------------------------
console.log('----- задание 3 -----');

const length = 5;
const min = 0;
const max = 9;
let summArr = 0;
let minArr = 0;
let isTreeHere = false;
const arrayTaskThree = [...Array(length)];
for (let i = 0; i < arrayTaskThree.length; i++) {
    arrayTaskThree[i] = Math.floor(Math.random() * (max - min) + min); 
    summArr = summArr + arrayTaskThree[i]; // Рассчитать сумму элементов этого массива
    if (arrayTaskThree[i] === 3) { // есть ли в этом массиве число 3
        isTreeHere = true;
    }
}
minArr = Math.min(...arrayTaskThree); // поиск минимального числа
console.log(`Получившийся массив: ${arrayTaskThree}`); 
console.log(`Сумма элементов массива: ${summArr}`); 
console.log(`Минимальное число массива: ${minArr}`);
if (isTreeHere === true) console.log(`В этом массиве ЕСТЬ число 3`);
if (isTreeHere === false) console.log(`В этом массиве НЕТ числа 3`);

// задание 4 ---------------------------------------------------------------------
console.log('----- задание 4 -----');
let elString = 'x';
let finaleString = '';
console.log(`1. ${finaleString}`);
for (let i = 0; i < 19; i++) {
    finaleString = finaleString + elString;
    console.log(`${i+2}. ${finaleString}`);
}

