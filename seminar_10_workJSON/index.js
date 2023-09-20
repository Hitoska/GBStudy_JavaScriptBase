import { dataInfo } from "./data.js";

const data = JSON.parse(dataInfo);
console.log(data);
const content = document.querySelector(".content");


// data.forEach(el => {
//     const img = document.createElement('img');
//     img.src = el.url;
//     document.querySelector('.content').appendChild(img);
    
// })

data.forEach(({id, name, age, url}) => {
    // сам div
    const div = document.createElement('div');
    div.classList.add("card__div");
    div.style.display = 'inline-block';
    div.style.marginRight = '10px';
    content.appendChild(div);

    // вставляем картинку
    const img = document.createElement('img');
    img.classList.add("card__img");
    img.src = url;
    img.width = 200;
    div.appendChild(img);

    // под картинкой тело карточки персонажа
    const cardBody = document.createElement("div");
    cardBody.classList.add("card__body");
    div.appendChild(cardBody);

    // в теле карточки id
    const idPara = document.createElement("p");
    idPara.classList.add("card__idPara");
    idPara.textContent = `id: ${id}`;
    cardBody.appendChild(idPara);

    // в теле карточки name
    const title = document.createElement("h5");
    title.classList.add("card__title");
    title.textContent = name;
    cardBody.appendChild(title);

    // в теле карточки age
    const subtitle = document.createElement("h6");
    subtitle.classList.add("card__age");
    subtitle.textContent = age;
    cardBody.appendChild(subtitle);

});