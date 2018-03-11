'use strict';
var comments = ['Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', 'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'];
var template = document.querySelector('template').content;
var galleryOverlay = document.querySelector('.gallery-overlay');
var pictures = document.querySelector('.pictures');


var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var addArray = function (number) {
  var image = [];
  for (var i = 1; i <= number; i++) {
    image.push({
      url: 'photos/' + i + '.jpg',
      likes: getRandom(15, 200),
      comment: comments[getRandom(0, 5)]
    });
  }

  return image;
};
var posting = addArray(26);

var renderPhoto = function (data) {
  var windowElement = template.cloneNode(true);
  windowElement.querySelector('img').src = data.url;
  windowElement.querySelector('.picture-likes').textContent = data.likes;
  windowElement.querySelector('.picture-comments').textContent = data.comment;
  return windowElement;
};

var addPhoto = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 26; i++) {
    fragment.appendChild(renderPhoto(posting[i]));
    pictures.appendChild(fragment);
  }
};
addPhoto();

var showImage = function (data) {
  galleryOverlay.classList.remove('hidden');
  galleryOverlay.querySelector('img').src = data.url;
  galleryOverlay.querySelector('.comments-count').textContent = data.comment;
  galleryOverlay.querySelector('.likes-count').textContent = data.likes;
};
showImage(posting[getRandom(0, 25)]);

