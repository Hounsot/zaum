import './kochuka.css'
document.addEventListener('DOMContentLoaded', () => {
  let burgerMenu = document.querySelector('.A_BurgerMenu')
  let burgerList = document.querySelector('.AAAA')
  let burgerHandler = document.querySelector('.U_BurgerHandler')
  let burgerHandler2 = document.querySelectorAll('.W_LogoAndInfo')
  burgerHandler.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('is_active')
    burgerList.classList.toggle('is_active')
    for (
      let i = 0;
      i < document.querySelectorAll('.W_LogoAndInfo').length;
      i++
    ) {
      console.log(document.querySelectorAll('.W_LogoAndInfo')[i])
      const e = document.querySelectorAll('.W_LogoAndInfo')[i]
      e.classList.toggle('is_active')
    }
  })
})
document.addEventListener('keydown', () => {
  burgerMenu.classList.toggle('is_active')
  burgerList.classList.toggle('is_active')
  backButton.classList.toggle('is_active')
})
