/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
window.addEventListener('DOMContentLoaded', function (event) {
  var trigger = document.getElementsByTagName('body')[0];
  var cursor = document.getElementById('cursor');
  var emptyCursor = document.getElementsByClassName('error')[0];
  var triggerZone = document.getElementsByTagName('img');
  document.getElementsByClassName('cursorText')[1].style.color = 'rgb(255, 66, 142)';
  document.getElementsByClassName('cursorText')[1].style.textDecoration = 'none';
  var _loop = function _loop(i) {
    triggerZone[i].addEventListener('mouseenter', function (event) {
      var attributeCheck = triggerZone[i].parentElement.hasAttribute('href');
      if (attributeCheck) {
        document.getElementById('cursorGround').style.mixBlendMode = 'difference';
        cursor.classList.remove('hidden');
        window.addEventListener('mousemove', function (e) {
          var cursorWidth = cursor.offsetWidth / 2;
          var cursorHeight = cursor.offsetHeight / 2;
          var mouseX = e.clientX;
          var mouseY = e.clientY;
          cursor.style.left = "".concat(mouseX - cursorWidth, "px");
          cursor.style.top = "".concat(mouseY - cursorHeight, "px");
        });
      } else {
        document.getElementById('cursorGround').style.mixBlendMode = 'normal';
        emptyCursor.classList.remove('hiddenError');
        window.addEventListener('mousemove', function (e) {
          var cursorWidth = emptyCursor.offsetWidth / 2;
          var cursorHeight = emptyCursor.offsetHeight / 2;
          var mouseX = e.clientX;
          var mouseY = e.clientY;
          emptyCursor.style.left = "".concat(mouseX - cursorWidth, "px");
          emptyCursor.style.top = "".concat(mouseY - cursorHeight, "px");
        });
      }
    });
    triggerZone[i].addEventListener('mouseleave', function (event) {
      cursor.classList.add('hidden');
    });
    triggerZone[i].addEventListener('mouseleave', function (event) {
      emptyCursor.classList.add('hiddenError');
    });
  };
  for (var i = 0; i < triggerZone.length; i++) {
    _loop(i);
  }
  var triggerVideoZone = document.getElementsByTagName('video');
  var _loop2 = function _loop2() {
    var attributeCheck = triggerVideoZone[_i].parentElement.hasAttribute('href');
    triggerVideoZone[_i].addEventListener('mouseenter', function (event) {
      if (attributeCheck) {
        document.getElementById('cursorGround').style.mixBlendMode = 'difference';
        cursor.classList.remove('hidden');
        window.addEventListener('mousemove', function (e) {
          var cursorWidth = cursor.offsetWidth / 2;
          var cursorHeight = cursor.offsetHeight / 2;
          var mouseX = e.clientX;
          var mouseY = e.clientY;
          cursor.style.left = "".concat(mouseX - cursorWidth, "px");
          cursor.style.top = "".concat(mouseY - cursorHeight, "px");
        });
      } else {
        document.getElementById('cursorGround').style.mixBlendMode = 'normal';
        emptyCursor.classList.remove('hiddenError');
        window.addEventListener('mousemove', function (e) {
          var cursorWidth = emptyCursor.offsetWidth / 2;
          var cursorHeight = emptyCursor.offsetHeight / 2;
          var mouseX = e.clientX;
          var mouseY = e.clientY;
          emptyCursor.style.left = "".concat(mouseX - cursorWidth, "px");
          emptyCursor.style.top = "".concat(mouseY - cursorHeight, "px");
        });
      }
    });
    triggerVideoZone[_i].addEventListener('mouseleave', function (event) {
      cursor.classList.add('hidden');
    });
    triggerVideoZone[_i].addEventListener('mouseleave', function (event) {
      emptyCursor.classList.add('hiddenError');
    });
  };
  for (var _i = 0; _i < triggerVideoZone.length; _i++) {
    _loop2();
  }
  window.addEventListener('scroll', function (event) {
    var scroll = trigger.getBoundingClientRect().top * -1;
    if (scroll >= 300) {
      document.getElementsByTagName('nav')[0].classList.add('lol');
    } else {
      document.getElementsByTagName('nav')[0].classList.remove('lol');
    }
  });
});
/******/ })()
;