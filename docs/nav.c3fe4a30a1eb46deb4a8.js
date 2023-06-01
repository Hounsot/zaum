/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
window.addEventListener('DOMContentLoaded', function () {
  var trigger = document.getElementsByTagName('body')[0];
  var cursor = document.getElementById('cursor');
  var triggerZone = document.getElementsByTagName('img');
  for (var i = 0; i < triggerZone.length; i++) {
    triggerZone[i].addEventListener('mouseenter', function (event) {
      cursor.classList.remove('hidden');
      window.addEventListener('mousemove', function (e) {
        var cursorWidth = cursor.offsetWidth / 2;
        var cursorHeight = cursor.offsetHeight / 2;
        var mouseX = e.clientX;
        var mouseY = e.clientY;
        cursor.style.left = "".concat(mouseX - cursorWidth, "px");
        cursor.style.top = "".concat(mouseY - cursorHeight, "px");
      });
    });
    triggerZone[i].addEventListener('mouseleave', function (event) {
      cursor.classList.add('hidden');
    });
  }
  var triggerVideoZone = document.getElementsByTagName('video');
  for (var _i = 0; _i < triggerVideoZone.length; _i++) {
    triggerVideoZone[_i].addEventListener('mouseenter', function (event) {
      cursor.classList.remove('hidden');
      window.addEventListener('mousemove', function (e) {
        var cursorWidth = cursor.offsetWidth / 2;
        var cursorHeight = cursor.offsetHeight / 2;
        var mouseX = e.clientX;
        var mouseY = e.clientY;
        cursor.style.left = "".concat(mouseX - cursorWidth, "px");
        cursor.style.top = "".concat(mouseY - cursorHeight, "px");
      });
    });
    triggerVideoZone[_i].addEventListener('mouseleave', function (event) {
      cursor.classList.add('hidden');
    });
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