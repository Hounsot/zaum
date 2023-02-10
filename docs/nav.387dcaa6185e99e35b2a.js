/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
window.addEventListener('DOMContentLoaded', function (event) {
  var trigger = document.getElementsByTagName('body')[0];
  addEventListener('scroll', function (event) {
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