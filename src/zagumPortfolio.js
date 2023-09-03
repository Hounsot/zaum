import './kochkaPortfolio.css'
console.log('hi')
document.addEventListener('DOMContentLoaded', () => {
  let burgerMenu = document.querySelector('.A_BurgerMenu')
  let burgerList = document.querySelector('.AAAA')
  let backButton = document.querySelector('.W_Back')
  let burgerHandler = document.querySelector('.U_BurgerHandler')
  burgerHandler.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('is_active')
    burgerList.classList.toggle('is_active')
    backButton.classList.toggle('is_active')
    document.querySelectorAll('.O_Project').forEach((e) => {
      e.classList.toggle('is_active')
    })
  })
})
document.addEventListener('keydown', () => {
  burgerMenu.classList.toggle('is_active')
  burgerList.classList.toggle('is_active')
  backButton.classList.toggle('is_active')
})
