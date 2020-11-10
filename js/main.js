'use strict';

let template = document.querySelector(`#picture`).content.querySelector(`a`);
let keksContent = document.querySelector(`.pictures`);

// let AUTHOR_NAMES = [`Алиса`, `Матвей`, `Игорь`, `Цезарь`, `Афродита`, `Клон`];
let MESSAGE_ARRAY = [`Всё отлично!`, `В целом всё неплохо. Но не всё.`, `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`, `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`, `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`, `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`];

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let getObject = function () {
  let jsObject;
  let newArray = [];
  let newNumber = getRandomInRange(1, 2);

  for (let i = 0; i < newNumber; i++) {
    let newComment = getRandomInRange(1, 6);
    MESSAGE_ARRAY[i] = MESSAGE_ARRAY[newComment];
  }

  for (let i = 0; i < 25; i++) {
    let photo = `photos/` + [i + 1] + `.jpg`;
    let lineDescription = ``;
    jsObject = {
      url: photo,
      description: lineDescription,
      likes: getRandomInRange(15, 200),
      comments: MESSAGE_ARRAY[i]
    };
    newArray.push(jsObject);
  }
  return newArray;
};

getObject();

let contentArray = getObject();

for (let i = 0; i < 25; i++) {
  let element = template.cloneNode(true);

  // let pictureImg = element.querySelector(`.picture__img`).src;
  let pictureLikes = element.querySelector(`.picture__likes`);
  let pictureComments = element.querySelector(`.picture__comments`);

  element.querySelector(`.picture__img`).src = contentArray[i].url;

  pictureLikes.textContent = contentArray[i].likes;
  pictureComments.textContent = contentArray[i].comments;
  keksContent.appendChild(element);
}
