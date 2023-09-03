import './kochuka.css'
console.log('hi')
document.addEventListener('DOMContentLoaded', () => {
  let burgerMenu = document.querySelector('.A_BurgerMenu')
  let burgerList = document.querySelector('.C_Navigation')
  let burgerHandler = document.querySelector('.U_BurgerHandler')
  burgerHandler.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('is_active')
    burgerList.classList.toggle('is_active')
  })
})
document.addEventListener('keydown', () => {
  burgerMenu.classList.toggle('is_active')
  burgerList.classList.toggle('is_active')
})
