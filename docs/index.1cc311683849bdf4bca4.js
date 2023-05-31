/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

document.addEventListener('DOMContentLoaded', function () {
  var infoItems = document.querySelectorAll('.M_Info');
  console.log('hi');
  function createArrayById(dataIdValue, clickedElement) {
    var elements = document.querySelectorAll("[data-link='" + dataIdValue + "']");
    var newArray = [];
    for (var i = 0; i < elements.length; i++) {
      if (elements[i] !== clickedElement) {
        newArray.push(elements[i]);
      }
    }
    return newArray;
  }
  infoItems.forEach(function (element) {
    element.addEventListener('click', function (ars) {
      event.preventDefault();
      console.log(ars.target.href);
      element.classList.add('U_Active');
      var others = createArrayById('true', element);
      var i = 0;
      var interval = setInterval(function () {
        others[i].classList.add('U_Hidden');
        i++;
        if (i === others.length) {
          clearInterval(interval);
        }
      }, 250);
      setTimeout(function () {
        window.location = ars.target.href;
      }, 250 * others.length);
    });
  });
  console.log('hi');
});
/******/ })()
;