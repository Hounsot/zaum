/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

console.log('hi');
document.addEventListener('DOMContentLoaded', function () {
  var burgerMenu = document.querySelector('.A_BurgerMenu');
  var burgerList = document.querySelector('.AAAA');
  var backButton = document.querySelector('.W_Back');
  var burgerHandler = document.querySelector('.U_BurgerHandler');
  burgerHandler.addEventListener('click', function (e) {
    burgerMenu.classList.toggle('is_active');
    burgerList.classList.toggle('is_active');
    backButton.classList.toggle('is_active');
    document.querySelectorAll('.O_Project').forEach(function (e) {
      e.classList.toggle('is_active');
    });
  });
});
document.addEventListener('keydown', function () {
  burgerMenu.classList.toggle('is_active');
  burgerList.classList.toggle('is_active');
  backButton.classList.toggle('is_active');
});
/******/ })()
;