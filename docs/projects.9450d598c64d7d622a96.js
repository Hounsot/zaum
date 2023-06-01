/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

document.addEventListener('DOMContentLoaded', function () {
  var subInfoPoints = document.querySelectorAll('.U_Hidden');
  var delayInMilliseconds = 100;
  var index = 1;
  //   function myLoop(params) {
  //     setTimeout(function () {
  //       //   subInfoPoints[index].classList.remove('U_Hidden')
  //       console.log(index)
  //       index++
  //       if (index <= subInfoPoints.length) {
  //         myLoop
  //       }
  //     }, 3000)
  //   }
  //   myLoop(index)
  //   setInterval(() => {
  //     console.log(index)
  //     index++
  //   }, 100)
  var i = 0;
  var interval = setInterval(function () {
    console.log(subInfoPoints[i]);
    subInfoPoints[i].classList.remove('U_Hidden');
    i++;
    if (i === subInfoPoints.length) {
      clearInterval(interval);
    }
  }, 250);
});
/******/ })()
;