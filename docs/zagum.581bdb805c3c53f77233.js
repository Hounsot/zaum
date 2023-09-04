/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

document.addEventListener('DOMContentLoaded', function () {
  var burgerMenu = document.querySelector('.A_BurgerMenu');
  var burgerList = document.querySelector('.AAAA');
  var burgerHandler = document.querySelector('.U_BurgerHandler');
  var burgerHandler2 = document.querySelectorAll('.W_LogoAndInfo');
  burgerHandler.addEventListener('click', function (e) {
    burgerMenu.classList.toggle('is_active');
    burgerList.classList.toggle('is_active');
    for (var i = 0; i < document.querySelectorAll('.W_LogoAndInfo').length; i++) {
      console.log(document.querySelectorAll('.W_LogoAndInfo')[i]);
      var _e = document.querySelectorAll('.W_LogoAndInfo')[i];
      _e.classList.toggle('is_active');
    }
  });
});
document.addEventListener('keydown', function () {
  burgerMenu.classList.toggle('is_active');
  burgerList.classList.toggle('is_active');
  backButton.classList.toggle('is_active');
});
/******/ })()
;