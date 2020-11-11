'use strict';

let template = document.querySelector(`#picture`).content.querySelector(`a`);
let keksContent = document.querySelector(`.pictures`);

let MESSAGE_ARRAY = [`Всё отлично!`, `В целом всё неплохо. Но не всё.`, `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`, `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`, `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`, `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`];

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let getArrayDataPhoto = function () {
  let objectDataPhoto;
  let arrayDataPhoto = [];
  let newRandomNumber = getRandomInRange(1, 2);

  for (let i = 0; i < newRandomNumber; i++) {
    let newComment = getRandomInRange(1, 6);
    MESSAGE_ARRAY[i] = MESSAGE_ARRAY[newComment];
  }

  for (let i = 0; i < 25; i++) {
    let photoObject = `photos/` + [i + 1] + `.jpg`;
    let lineDescription = ``;
    objectDataPhoto = {
      url: photoObject,
      description: lineDescription,
      likes: getRandomInRange(15, 200),
      comments: MESSAGE_ARRAY[i]
    };
    arrayDataPhoto.push(objectDataPhoto);
  }
  return arrayDataPhoto;
};

let contentArray = getArrayDataPhoto();

for (let i = 0; i < 25; i++) {
  let elementContent = template.cloneNode(true);

  let pictureLikes = elementContent.querySelector(`.picture__likes`);
  let pictureComments = elementContent.querySelector(`.picture__comments`);

  elementContent.querySelector(`.picture__img`).src = contentArray[i].url;

  pictureLikes.textContent = contentArray[i].likes;
  pictureComments.textContent = contentArray[i].comments;
  keksContent.appendChild(elementContent);
}
