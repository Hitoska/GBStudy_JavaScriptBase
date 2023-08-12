// задание 1
// Дан объект numbers. 
// Необходимо в консоль вывести все значения больше или равные 3.
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
    }
console.log('----- задание 1 -----');
for (key in numbers) {
    if (numbers[key] >= 3) console.log(numbers[key]);
}

// задание 2
// Необходимо из объекта post вывести значения, 
// к которым приписан комментарий, в консоль.
const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
                likes: 10,
                dislikes: 2, // вывести это число
                },
        },
        {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
                likes: 3,
                dislikes: 1,
                },
        },
    ],
};
console.log('----- задание 2 -----');
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// задание 3
// Дан массив products, необходимо цену каждого продукта 
// уменьшить на 15% используя метод forEach.
const products3 = [
    {
    id: 3,
    price: 200,
    },
    {
    id: 4,
    price: 900,
    },
    {
    id: 1,
    price: 1000,
    },
];
console.log('----- задание 3 -----');
Object.values(products3).forEach(function(element) {
    element.price *= 0.85;
    console.log(`id = ${element.id}; new price = ${element.price}`);
  });
// или такой вариант:
// products.forEach(product => product.price = product.price * 0.85);

// задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна
// фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене,
// начиная с самой маленькой, заканчивая самой большой ценой, 
// после чего вывести отсортированный массив в консоль.
const products4 = [
    {
    id: 3,
    price: 127,
    photos: [
            "1.jpg",
            "2.jpg",
            ],
    },
    {
    id: 5,
    price: 499,
    photos: [],
    },
    {
    id: 10,
    price: 26,
    photos: [
            "3.jpg",
            ],
    },
    {
    id: 8,
    price: 78,
    },
];
console.log('----- задание 4 -----');

console.log(products4.filter(product => 'photos' in product && 
    product.photos.length !== 0));
console.log(products4.sort((product1, product2) => 
    product1.price - product2.price));

// задание 5
// Необходимо объединить 2 этих массива, чтобы значения первого массива
// были ключами, а значения второго массива — значениями.
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
console.log('----- задание 5 -----');
const weekDays = {};
if (en.length == ru.length) {
for (let i = 0; i < en.length; i++) {
    weekDays[en[i]] = ru[i];
}
} else {
    console.log('Ошибка! Длины массивов не совпадают');
}
console.log(weekDays);